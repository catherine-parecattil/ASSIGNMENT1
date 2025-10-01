const a = require("fs");
a.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Content:", data);
});

