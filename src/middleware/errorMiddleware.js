function errorHandler(err, req, res, next) {
  console.log(err.stack);
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).send({ Error: message });
}

module.exports = errorHandler;
