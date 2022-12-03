const fs = require("fs");
const groups = fs
  .readFileSync("0/input.txt")
  .toString()
  .split(/\n\s*\n/);
const lists = groups.map((g) => g.split("\n"));
const totals = lists.map((l) => {
  return l.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
});

// console.log(Math.max(...totals));

console.log(
  totals
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0)
);
