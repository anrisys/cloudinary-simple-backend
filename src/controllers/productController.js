const { addProductService } = require("../services/productService");

const addProductController = async (req, res, next) => {
  try {
    console.log("Ini masuk ke controller");
    if (!req.file) {
      throw { statusCode: 400, message: "Tidak ada gambar yang di upload" };
    }

    const { name, stock } = req.body;

    if (!name) {
      throw { statusCode: 400, message: "Nama produk tidak boleh kosong" };
    }

    const result = await addProductService(name, req.file.path, stock);
    res
      .status(201)
      .send({ message: "Berhasil menambahkan product", product: result });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProductController,
};
