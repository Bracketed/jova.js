import type { LoggerFormatOptions, LoggerLevelOptions, LogLevel } from '@bracketed/logger';

/**
 * The logger options.
 * @since 1.0.0
 */
export interface LoggerOptions {
	/**
	 * A writable stream for the output logs.
	 * @since 1.0.0
	 * @default process.stdout
	 */
	stdout?: NodeJS.WritableStream;
	/**
	 * A writable stream for the error logs.
	 * @since 1.0.0
	 * @default process.stderr
	 */
	stderr?: NodeJS.WritableStream;
	/**
	 * The default options used to fill all the possible values for {@link LoggerOptions.format}.
	 * @since 1.0.0
	 * @default options.format.none ?? {}
	 */
	defaultFormat?: LoggerLevelOptions;
	/**
	 * The options for each log level. LogLevel.None serves to set the default for all keys, where only
	 * {@link LoggerTimestampOptions.timestamp} and {@link LoggerLevelOptions.prefix} would be overridden.
	 * @since 1.0.0
	 * @default {}
	 */
	format?: LoggerFormatOptions;
	/**
	 * The minimum log level.
	 * @since 1.0.0
	 * @default LogLevel.Info
	 */
	level?: LogLevel;
	/**
	 * The string that joins different messages.
	 * @since 1.0.0
	 * @default ' '
	 */
	join?: string;
	/**
	 * The inspect depth when logging objects.
	 * @since 1.0.0
	 * @default 2
	 */
	depth?: number;
}
