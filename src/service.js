require("dotenv").config();
const logger = require("./utils/logger");
try {
  require("./config/env").validateVariable();
  const app = require("./config/");
  app.listen(process.env.PORT, () =>
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  );
} catch (e) {
  logger.error(e);
}
