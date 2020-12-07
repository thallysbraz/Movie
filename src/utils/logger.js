const { createLogger, format, transports } = require("winston");
const moment = require("moment-timezone");
const { combine, printf } = format;

const appendTimestamp = format((info, opts) => {
  if (opts.tz) {
    info.timestamp = moment().tz(opts.tz).format("DD-MM-YYYY HH:mm:ss");
  }

  return info;
});

const logFormatConsole = printf(
  (info) => `[${info.label}] ${info.level}: ${info.message}`
);
const logFormatFile = printf(
  (info) => `${info.timestamp} ${info.level}: ${info.message}`
);

const logger = createLogger({
  format: combine(appendTimestamp({ tz: "America/Sao_Paulo" }), logFormatFile),
  transports: [
    new transports.File({
      maxsize: 5120000,
      maxFiles: 10,
      filename: `${__dirname}/../logs/log-api.log`,
    }),
    new transports.Console({
      level: "debug",
    }),
  ],
});

module.exports = logger;
