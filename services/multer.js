const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const fileTypeFilter = function (req, file, cb) {
  const fileTypes = /jpeg|png|jpg/;
  const extension = fileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = fileTypes.test(file.mimetype);

  if (extension && mimeType) {
    cb(null, true);
  }
  cb(null, false);
};
const upload = multer({
  storage: storage,
  fileFilter: fileTypeFilter,
  size: 2000000,
});

module.exports = upload;
