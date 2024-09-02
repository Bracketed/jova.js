import { AppRoute } from '#root/registry/AppRouteType';
import { Registry } from '#root/registry/Registry';
import { Methods } from '#root/types/RouteTypes';
import { RouteHandler } from '#root/registry/RouteHandlerType';
import { Middleware } from '#root/registry/MiddlewareType';

import Express, { Express as ExpressType } from 'express';
import compression from 'compression';
import path from 'node:path';
import { Stopwatch } from '@sapphire/stopwatch';
import cors from 'cors';
import url from 'node:url';
import * as dirSearch from '#root/utils/DirSearch';
import { Logger } from '@bracketed/logger';

const loadApplicationRoutes = async (application: ExpressType) => {
	const registry = new Registry({
		basePath: '/api',
		middlewares: [Express.json(), compression(), cors()],
	});

	const routes = dirSearch.readdirSyncRecursive(
		path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'routes')
	);

	Logger.info('RouteRegistry: Registering routes...');
	const RouteRegisterStopwatch = new Stopwatch();

	for await (const [_index, value] of routes.entries()) {
		const RouteTimer = new Stopwatch();
		const Route = (await import(`file://${value}`)).Route as {
			new (): { registerApplicationRoutes: (registry: Registry) => AppRoute };
		};

		const RegisteredRoute = new Route().registerApplicationRoutes(registry);

		Logger.info(
			`RouteRegistry: Registered Route: ${RegisteredRoute.getRoute().route} (${RegisteredRoute.getRoute().method.toUpperCase()}) in ${RouteTimer.stop().toString()}`
		);
	}

	Logger.info(`RouteRegistry: Registered ${routes.length} route(s) in ${RouteRegisterStopwatch.stop().toString()}`);

	registry
		.getRoutes()
		.forEach((Route) => application[Route.method](Route.route, ...Route.middlewares, Route.handler));
};

export {
	AppRoute as ApplicationRoute,
	Registry,
	Methods,
	RouteHandler as RouteHandlerType,
	Middleware as MiddlewareType,
	loadApplicationRoutes,
};
