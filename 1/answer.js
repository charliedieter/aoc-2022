// a rock b paper c scissor
// x rock y paper z scissor
// 1 rock 2 paper 3 scissor + 0 loss 3 draw 6 win

const fs = require("fs");
let plays = fs.readFileSync("1/input.txt").toString().split(/\n/);

plays = plays.map((p) =>
  p.split(" ").map((play) => {
    switch (play) {
      case "A":
      case "X":
        return 1;
      case "B":
      case "Y":
        return 2;
      case "C":
      case "Z":
        return 3;
    }
  })
);

function play(x, y) {
  if (x === 3 && y === 1) {
    return 6;
  }
  if (y === 3 && x === 1) {
    return 0;
  }
  if (x > y) {
    return 0;
  }
  if (y === x) {
    return 3;
  }
  if (y > x) {
    return 6;
  }
}

function computePlay(opponentPlay, goal) {
  // 1 lose 2 draw 3 win
  if (goal === 1) {
    return opponentPlay === 1 ? 3 : opponentPlay - 1;
  }
  if (goal === 2) {
    return opponentPlay;
  }
  if (goal === 3) {
    return opponentPlay === 3 ? 1 : opponentPlay + 1;
  }
}

// rewrite my play based on outcome
plays = plays.map((p) => [p[0], computePlay(...p)]);

// calculate scores
const scores = plays.map((p) => p[1] + play(...p));

// add em up
const total = scores.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
console.log(total);
