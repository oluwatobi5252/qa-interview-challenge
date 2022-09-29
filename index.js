const express = require("express");

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// users api routes
app.use("/api/users", require("./routes/api/users"));

module.exports = { app: app };
