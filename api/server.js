// build your server here and require it from index.js

const express = require("express");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.json({ message: "Express server is working." });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
