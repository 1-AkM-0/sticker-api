const { Router } = require("express");
const upload = require("../services/multer");
const apiController = require("../controllers/apiController");

const apiRoute = Router();

apiRoute.post("/upload", upload.single("file"), apiController.handleImg);

module.exports = apiRoute;
