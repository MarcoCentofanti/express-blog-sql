const express = require(`express`);
const app = express();
const port = 3000;
const errorHandler = require(`./middlewares/errorHandler`);
const notFound = require(`./middlewares/notFound`);

app.get(`/`, (req, res) => {
  res.send("Benvenuto sul mio sito");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(errorHandler);
app.use(notFound);
