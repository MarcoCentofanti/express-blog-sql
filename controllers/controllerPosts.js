const { post } = require("../routers/routerPosts");

function index(req, res) {
  res.send("index");
}

function show(req, res) {
  res.send("Show");
}

function create(req, res) {
  res.send("create");
}

function update(req, res) {
  res.send("update");
}

function patch(req, res) {
  res.send("modify");
}

function destroy(req, res) {
  res.send("delete");
}

module.exports = { index, show, create, update, patch, destroy };
