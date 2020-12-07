const boom = require("boom");

class EnvConfig {
  validateVariable() {
    const error = [];
    const listVariables = [
      "PORT",
      "DB_HOST",
      "DB_PORT",
      "DB_USER",
      "DB_PASS",
      "DB_DATABASE",
    ];

    for (const variable of listVariables) {
      if (!process.env[variable]) error.push(variable);
    }

    if (error.length > 0)
      throw boom.notImplemented(
        `environment variables not found: ${error}`,
        error
      );
  }
}

module.exports = new EnvConfig();
