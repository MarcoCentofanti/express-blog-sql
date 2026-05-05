function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({
    err: err.message,
    internalMessage: "orrore",
  });
}

module.exports = errorHandler;
