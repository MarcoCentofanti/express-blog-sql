const connection = require("./../data/db");

function index(req, res) {
  const sql = "SELECT * FROM posts";
  const sqlLabel = connection.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(result);
  });
}

function show(req, res) {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id = ?`;
  const sqlLabel = `
  SELECT tags.label 
  FROM posts 
  JOIN post_tag  
  ON posts.id = post_id 
  JOIN tags 
  ON tags.id = post_tag.tag_id 
  WHERE posts.id = ?`;

  connection.query(sql, [id], (err, postResult) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    if (postResult.lenght === 0)
      return res.status(404).json({ error: `Post not found` });

    const post = postResult[0];

    connection.query(sqlLabel, [id], (err, labelResult) => {
      if (err) return req.status(500).json({ error: `Failed query` });
      // if (labelResult.length === 0)
      //   res.status(404).json({ error: `Label not found` });

      post.tags = labelResult.map((tag) => tag.label);
      res.json(post);
    });
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
  const id = req.params.id;
  const sqlDelete = `DELETE FROM posts WHERE id = ?`;

  connection.query(sqlDelete, [id], (req, res) => {
    if (err) return res.status(500).json({ error: `failed to delete post` });
    res.sendStatud(204);
  });
}

module.exports = { index, show, create, update, patch, destroy };
