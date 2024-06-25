const express = require("express");
const { addProductController } = require("../controllers/productController");
const { storage } = require("../storage/storage");
const multer = require("multer");

const upload = multer({ storage });
const router = express.Router();

router.post("/products", upload.single("image"), addProductController);

module.exports = router;
