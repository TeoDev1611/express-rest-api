const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require("path");
const logger = require("./middlewares/logger");

//STATICS
app.use(express.static(path.join(__dirname, "public")));

// Middlewars
app.use(logger);
// Body parser json
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ROUTING APP
app.use("/api/members", require("./routes/api/members"));

//Base route
app.use("/", require("./routes/api/base"));

//Run app
app.listen(PORT, () => {
  console.log(`Server in https://localhost:${PORT}`);
});
