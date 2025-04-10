import type { LoggerFormatOptions, LoggerLevelOptions, LogLevel } from '@bracketed/logger';

/**
 * @name LoggerOptions
 * @description The logger options.
 * @module Types
 * @interface LoggerOptions
 */
export interface LoggerOptions {
	/**
	 * @name stdout
	 * @description A writable stream for the output logs.
	 * @default process.stdout
	 * @type NodeJS.WritableStream
	 */
	stdout?: NodeJS.WritableStream;
	/**
	 * @name stderr
	 * @description A writable stream for the error logs.
	 * @default process.stderr
	 * @type NodeJS.WritableStream
	 */
	stderr?: NodeJS.WritableStream;
	/**
	 * @name defaultFormat
	 * @description The default options used to fill all the possible values for {@link LoggerOptions.format}.
	 * @default options.format.none ?? {}
	 * @type LoggerLevelOptions
	 */
	defaultFormat?: LoggerLevelOptions;
	/**
	 * @name format
	 * @description The options for each log level. LogLevel.None serves to set the default for all keys, where only
	 * {@link LoggerTimestampOptions.timestamp} and {@link LoggerLevelOptions.prefix} would be overridden.
	 * @default {}
	 * @type LoggerFormatOptions
	 */
	format?: LoggerFormatOptions;
	/**
	 * @name level
	 * @description The minimum log level.
	 * @default LogLevel.Info
	 * @type LogLevel
	 */
	level?: LogLevel;
	/**
	 * @name join
	 * @description The string that joins different messages.
	 * @default ' '
	 * @type string
	 */
	join?: string;
	/**
	 * @name depth
	 * @description The inspect depth when logging objects.
	 * @default 2
	 * @type number
	 */
	depth?: number;
}
