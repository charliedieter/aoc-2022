const fs = require("fs");
let lines = fs.readFileSync("2/input.txt").toString().split(/\n/);

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const groups = [];
for (let index = 0; index < lines.length; index += 3) {
  groups.push(lines.slice(index, index + 3));
}

function getCode(s) {
  return chars.indexOf(s) + 1;
}

function getIntersection(x, y, z) {
  for (let char of x) {
    if (y.includes(char) && z.includes(char)) {
      return char;
    }
  }
}

const nums = groups.map((g) => {
  const parts = g.map((p) => p.split(""));
  const intersection = getIntersection(...parts);
  const code = getCode(intersection);
  return code;
});

console.log(nums.reduce((acc, curr) => acc + curr, 0));
