const dayjs = require("dayjs");

// Middlewar logger
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${dayjs().format()}`
  );
  next();
};

// Export the logger 
module.exports = logger;
