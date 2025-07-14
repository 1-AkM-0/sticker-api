const sharp = require("sharp");

const resizeImg = async (img) => {
  await sharp(img)
    .rotate()
    .resize({
      width: 512,
      height: 512,
      fit: "fill",
    })
    .webp({ quality: 90 })
    .toFile("teste.webp");
};

module.exports = { resizeImg };
