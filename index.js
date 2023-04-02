const express = require("express");
const app = express();
const port = 3000;
app.get("/tin-tuc", (req, res) => {
  let a = 1;
  let b = 2;
  let result = a + b;
  console.log(result);
  return res.send("hello dat");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
