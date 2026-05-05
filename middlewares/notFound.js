function notFound(err, req, res, next) {
  res.status(404);
  res.json({
    error: "Not Found",
    message: "pagina non trovata",
  });
}

module.exports = notFound;
