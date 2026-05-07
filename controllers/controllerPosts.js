const connection = require("./../data/db");

function index(req, res) {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(result);
  });
}

function show(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id = ?`;

  connection.query(sql, [id], (err, postResult) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    if (postResult.lenght === 0)
      return res.status(404).json({ error: `Post not found` });
    const post = postResult[0];
    res.json(post);
  });
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
