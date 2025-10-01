const e = require("express");
const b= require("body-parser");
const a = e();
a.use(b.json());
a.get("/", (req, res) => {
  res.send("Hello, Its Catherine");
});
a.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
