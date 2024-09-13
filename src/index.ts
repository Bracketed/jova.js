import { Logger } from '@bracketed/logger';
import { Stopwatch } from '@sapphire/stopwatch';
import axios from 'axios';
import { CorsOptions } from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import { EventEmitter } from 'node:events';
import path from 'node:path';
import url from 'node:url';

import { Registry } from './registry/Registry.js';
import { readdirSyncRecursive } from './utils/DirSearch.js';

import { MiddlewareHandler } from './registry/types/Middlewares/MiddlewareHandlerType.js';
import { JovaCustomOption } from './types/config/jovaCustomOptions.js';
import { JovaServerOptions } from './types/config/jovaServerOptionsObject.js';
import { JovaSettings } from './types/config/jovaSettingsObject.js';
import { RatelimitConfig } from './types/config/rateLimitOptionsObject.js';

import { AppRoute as ApplicationRoute } from './registry/types/Routes/AppRouteType.js';

import { loadApplicationCorsConfiguration } from './resources/CorsConfig.js';
import { loadApplicationCustomConfiguration } from './resources/CustomOptionsConfig.js';
import { loadApplicationMiddlewaresConfiguration } from './resources/MiddlewaresConfig.js';
import { loadApplicationRatelimitConfiguration } from './resources/RatelimitConfig.js';
import { loadApplicationSettingsConfiguration } from './resources/SettingsConfig.js';
import { JovaEvent } from './types/JovaEvents.js';
import { JovaPathSettings } from './types/config/jovaPathOptions.js';

// https://expressjs.com/en/api.html

export * from './types/config/jovaCustomOptions.js';
export * from './types/config/jovaCustomSettingEnum.js';
export * from './types/config/jovaServerOptionsObject.js';
export * from './types/config/rateLimitOptionsObject.js';

export * from './registry/types/Routes/AppRouteType.js';
export * from './registry/types/Routes/RouteHandlerType.js';

export * from './registry/types/Middlewares/AppMiddlewareType.js';
export * from './registry/types/Middlewares/MiddlewareHandlerType.js';

class JovaServer extends EventEmitter {
	private readonly port: string | number;
	private readonly basePath: string;

	private readonly middlewares: Array<MiddlewareHandler> | undefined;
	private readonly ratelimitConf: RatelimitConfig | undefined;
	private readonly settings: JovaSettings | undefined;
	private readonly customOptions: Array<JovaCustomOption> | undefined;
	private readonly corsOptions: CorsOptions | undefined;
	private readonly paths: JovaPathSettings;

	public readonly application: Express = express();
	public readonly registry: Registry;
	private readonly logger: Logger = new Logger();
	private readonly emitter: EventEmitter = new EventEmitter();

	constructor(options: JovaServerOptions = {}) {
		super();

		this.basePath = options.basePath || '';
		this.port = options.port || 3000;
		this.middlewares = options.middlewares || undefined;
		this.ratelimitConf = options.ratelimiting || undefined;
		this.settings = options.settings || undefined;
		this.customOptions = options.customOptions || undefined;
		this.corsOptions = options.cors || undefined;
		this.paths = {
			events: options.paths?.events || 'events',
			middlewares: options.paths?.middlewares || 'middlewares',
			routes: options.paths?.events || 'routes',
		};

		this.registry = new Registry({ basePath: this.basePath });
	}

	private release(Event: JovaEvent, ...args: any[]) {
		this.registry.emit(Event, ...args);
		this.emitter.emit(Event, ...args);
	}

	public async checkFreePort(port: number | string, recursive?: boolean): Promise<number> {
		if (typeof port === 'string') port = Number(port);
		if (port >= 65354)
			throw new Error('Cannot set application port while Jova.js Server is running.', {
				cause: 'AUTO_PORT_MAXED',
			});
		const InUse = await axios
			.get(`localhost:${port}`)
			.then(() => true)
			.catch(() => false);

		if (InUse) {
			if (recursive === true) {
				this.logger.info(
					`JovaListener: Port ${port} is in use, attempting to open server with port ${port + 1}.`
				);
				return await this.checkFreePort(port + 1);
			} else {
				throw new Error('Specified port is already in use.', { cause: 'PORT_IN_USE' });
			}
		}

		return port;
	}

	private async loadJovaResources() {
		loadApplicationRatelimitConfiguration(this.application, this.ratelimitConf);
		loadApplicationMiddlewaresConfiguration(this.application, this.middlewares);
		loadApplicationSettingsConfiguration(this.application, this.settings);
		loadApplicationCorsConfiguration(this.application, this.corsOptions);
		loadApplicationCustomConfiguration(this.application, this.customOptions);
	}

	public readonly any = this.application.all;
	public readonly all = this.application.all;

	public readonly get = this.application.get;
	public readonly delete = this.application.delete;
	public readonly param = this.application.param;
	public readonly post = this.application.post;
	public readonly put = this.application.put;
	public readonly render = this.application.render;
	public readonly route = this.application.route;

	private async loadApplicationRoutes() {
		const routes = readdirSyncRecursive(
			path.join(path.dirname(url.fileURLToPath(import.meta.url)), this.paths.routes as string)
		);

		this.logger.info('ApplicationRouteRegistry: Registering routes...');
		const RouteRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of routes.entries()) {
			const RouteTimer = new Stopwatch();
			const Route = (await import(`file://${value}`)).Route as {
				new (): { registerApplicationRoutes: (registry: Registry) => ApplicationRoute };
			};

			const RegisteredRoute = new Route().registerApplicationRoutes(this.registry);

			this.logger.info(
				`ApplicationRouteRegistry: Registered Route: ${RegisteredRoute.getApplicationRoute().route} (${RegisteredRoute.getApplicationRoute().method.toUpperCase()}) in ${RouteTimer.stop().toString()}`
			);
		}

		this.registry
			.getRoutes()
			.forEach((Route) => this.application[Route.method](Route.route, ...Route.middlewares, Route.handler));

		this.logger.info(
			`ApplicationRouteRegistry: Registered ${routes.length} route(s) in ${RouteRegisterStopwatch.stop().toString()}`
		);
	}

	public async listen(port?: string | number, allowPortIncrement?: boolean): Promise<void> {
		if (!port) port = this.port;

		const inUse = await this.checkFreePort(port, allowPortIncrement)
			.then(() => false)
			.catch(() => true);

		if (inUse)
			throw new Error(
				'Specified port is already in use, allowPortIncrement is disabled so the server will not create any new ports.',
				{ cause: 'PORT_IN_USE' }
			);

		await this.loadJovaResources();

		/*
		await this.loadApplicationEvents().catch((err) => {
			this.logger.fatal('ApplicationEventRegistry: Error during listener processing:', err);
			process.exit(1);
		});

		await this.loadApplicationMiddlewares().catch((err) => {
			this.logger.fatal('ApplicationMiddlewareRegistry: Error during middleware processing:', err);
			process.exit(1);
		});*/

		await this.loadApplicationRoutes().catch((err) => {
			this.logger.fatal('ApplicationRouteRegistry: Error during route processing:', err);
			process.exit(1);
		});

		this.application.listen(process.env.PORT || 3000, () => {
			this.logger.info(
				`Application: HTTP Server now serving on port ${port} with: \n${this.registry.getRoutes().length} routes \n${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} middlewares \n${this.registry.getEvents().length} event listeners`
			);
			this.release(JovaEvent.READY);
		});
	}
}

export {
	NextFunction as JovaApplicationNextFunction,
	Request as JovaApplicationRequest,
	Response as JovaApplicationResponse,
	JovaServer,
};
