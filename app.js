const express = require("express");
const app = express();
app.get("/x", (req, res) => {
  const q = req.query.q;
  eval(q);
  res.send("ok");
});
app.listen(3000);
