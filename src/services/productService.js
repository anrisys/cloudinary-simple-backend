const { Product } = require("../db/models");

const addProductService = async (name, img_url, stock) => {
  try {
    console.log("ini sudah masuk ke dalam service");

    console.log("Ini url yang bakal di save", img_url);
    console.log("Ini name yang bakal di save", name);
    console.log("Ini stock yang bakal di save", stock);
    const product = await Product.create({ name, img_url, stock });
    console.log(
      "Ini harusnya mengeluarkan product hasil create di Product",
      product
    );
    return product;
  } catch (error) {
    console.error("Error in addProductService", error);
    throw error;
  }
};

module.exports = {
  addProductService,
};
