require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

async function sendSticker(req, res, id) {
  const form = new FormData();
  const img = fs.createReadStream("/home/pedro/repos/sticker-api/teste.webp");
  form.append("sticker", img, "teste.webp");
  form.append("chat_id", 5347849182);
  headers = form.getHeaders();

  const response = await axios.post(
    `https://api.telegram.org/bot${process.env.TOKEN}/sendSticker`,
    form,
    { headers }
  );
  const data = await response.data;
  console.log(data);
}

module.exports = { sendSticker };