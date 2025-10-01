const e = require("express");
const p = require("path");
const a = e();
a.use(e.static(p.join(__dirname)));
a.get("/", (req, res) => {
  res.sendFile(p.join(__dirname, "register.html"));
});
a.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
