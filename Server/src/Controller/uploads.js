const express = require("express");
const router = express.Router();

//multer file image upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("avatar");
// router.post('/', upload, function (req, res, next) {
// })

//Get products
router.get("/", async (req, res) => {
  const data = await products.find({});
  res.json({
    products: data,
  });
});

//Post Products
router.post("/", upload, async (req, res) => {
  // console.log(req.file)
  req.body.filename = req.file.filename;
  // console.log(req.body)

  products.create(req.body);
});

module.exports = router;
