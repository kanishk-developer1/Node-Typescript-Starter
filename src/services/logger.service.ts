import winston from "winston";
import { APP_CONSTANTS, ENV_CONSTANTS, LOG_COLOR, LOG_LEVELS } from "../utils/constants/app.const";

// Define your severity levels. 
// With them, You can create log files, 
// see or hide levels based on the running ENV.
const levels = {
    error: LOG_LEVELS.ERROR,
    warn: LOG_LEVELS.WARN,
    info: LOG_LEVELS.INFO,
    http: LOG_LEVELS.HTTP,
    debug: LOG_LEVELS.DEBUG
}

// This method set the current severity based on 
// the current NODE_ENV: show all the log levels 
// if the server was run in development mode; otherwise, 
// if it was run in production, show only warn and error messages.
const getLevel = () => {
    const env = process.env.NODE_ENV || ENV_CONSTANTS.DEVELOPMENT;
    const isDevelopment = env === ENV_CONSTANTS.DEVELOPMENT;
    return isDevelopment ? APP_CONSTANTS.DEBUG : APP_CONSTANTS.WARN;
}

// Define different colors for each level. 
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.

const logColors = {
    error: LOG_COLOR.ERROR,
    warn: LOG_COLOR.WARN,
    info: LOG_COLOR.INFO,
    http: LOG_COLOR.HTTP,
    debug: LOG_COLOR.DEBUG
}


// Tell winston that you want to link the colors 
// defined above to the severity levels.

winston.addColors(logColors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
    // Add the message timestamp with the preferred format
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    // Tell Winston that the logs must be colored
    winston.format.colorize({ all: true }),
    // Define the format of the message showing the timestamp, the level and the message
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    )
);

// Define which transports the logger must use to print out messages. 
// In this example, we are using three different transports

const transports = [
    // Allow to use the console to print the messages
    new winston.transports.Console(),
    // Allow to print all the error level messages inside the error.log file
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    // Allow to print all the error message inside the all.log file
    // (also the error log that are also printed inside the error.log)
    new winston.transports.File({ filename: 'logs/all.log' }),
];


// Create the logger instance that has to be exported and used to log messages.
const logger = winston.createLogger({
    level: getLevel(),
    levels,
    format,
    transports
});

export default logger;

