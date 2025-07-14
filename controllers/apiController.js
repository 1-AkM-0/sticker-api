const imagePro = require("../services/imageProcessor");
const telegram = require("../services/messageTelegram");

const handleImg = async (req, res) => {
  console.log(req.file);
  if (!req.id) {
    req.id = 5347849182;
  }
  await imagePro.resizeImg(req.file.buffer);
  await telegram.sendSticker(req, res, req.id);
  res.end();
};

module.exports = { handleImg };
