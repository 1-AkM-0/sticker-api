const express = require("express");

const apiRoute = require("./routes/api");
const app = express();

app.use("/api", apiRoute);

const startServer = (port = process.env.PORT || 3000) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

module.exports = startServer;
