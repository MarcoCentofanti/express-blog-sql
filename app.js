const express = require(`express`);
const app = express();
const port = 3000;
const errorHandler = require(`./middlewares/errorHandler`);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
