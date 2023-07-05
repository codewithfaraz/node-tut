const path = require("path");
// console.log(path.sep);
// console.log(path.join("/folder", "test.txt"));
const filepath = path.join("/folder", "subfolder");
console.log(filepath);
// console.log(path.normalize(filepath));
// console.log(path.basename(filepath));
// console.log(path.dirname(__dirname, filepath));
console.log(path.extname(filepath));
