require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 3000;
const app = express();
const productRouter = require("./routes/productRoute");

app.use(cors());

app.use(productRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`);
});
