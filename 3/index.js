const fs = require("fs");
let lines = fs.readFileSync("3/input.txt").toString().split(/\n/);
let pairs = lines.map((l) => l.split(",").map((p) => p.split("-").map(Number)));

let count = 0;
for (let [[x1, y1], [x2, y2]] of pairs) {
  if (Math.max(x1, x2) <= Math.min(y1, y2)) {
    count++;
  }
}

console.log(count);
