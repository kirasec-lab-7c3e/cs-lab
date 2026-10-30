const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  const q = req.query.q;
  res.send(q);
});
app.listen(3000);
