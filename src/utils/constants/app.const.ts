export const ENV_CONSTANTS = {
    DEVELOPMENT: "development",
    PRODUCTION: "production",
    LOCALHOST: "localhost",
    PORT: "3000"
} as const

export const APP_CONSTANTS = {
    DEBUG: "debug",
    WARN: "warn"
} as const

export const LOG_LEVELS = {
    ERROR : 0,
    WARN: 1,
    INFO: 2,
    HTTP:3,
    DEBUG:4

} as const

export const LOG_COLOR = {  
    ERROR: 'red',
    WARN: 'yellow',
    INFO: 'green',
    HTTP: 'magenta',
    DEBUG: 'blue'

} as const
