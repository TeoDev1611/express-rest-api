// Modules
const express = require("express");
const app = express();
const path = require("path");

// My variables of files
const logger = require("./middlewares/logger");
const PORT = 3000 || process.env.PORT;

//Statics files
app.use(express.static(path.join(__dirname, "public")));

// My Middlewar
app.use(logger);

// Body parser json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Members Route
app.use("/api/members", require("./routes/api/members"));

//Base route
app.use("/", require("./routes/api/base"));

//Run app
app.listen(PORT, () => {
  console.log(`Server in https://localhost:${PORT}`);
});
