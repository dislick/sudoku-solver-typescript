/// <reference path="../typings/index.d.ts" />
import { SudokuBacktracker } from './sudoku-backtracker';

const printSudoku = (grid: number[][]) => {
  for (let x = 0; x < 9; x++) {
    if (x === 0) {
      console.log(Array(24).join('-'));
    }
    let out = '';
    for (let y = 0; y < 9; y++) {
      if ((y + 1) % 3 === 0 && y !== 0) {
        out += grid[x][y] + ' | ';
      } else {
        out += grid[x][y] + ' ';
      }
    }
    console.log(out);
    if ((x + 1) % 3 === 0) {
      console.log(Array(24).join('-'));
    }
  }
}

let grid = [
  [8,0,0,0,0,0,0,0,0],
  [0,0,3,6,0,0,0,0,0],
  [0,7,0,0,9,0,2,0,0],
  [0,5,0,0,0,7,0,0,0],
  [0,0,0,0,4,5,7,0,0],
  [0,0,0,1,0,0,0,3,0],
  [0,0,1,0,0,0,0,6,8],
  [0,0,8,5,0,0,0,1,0],
  [0,9,0,0,0,0,4,0,0]
];

printSudoku(grid);

let backtracker = new SudokuBacktracker(grid);
console.time('Solve Duration');
let isSolvable = backtracker.solve();
console.timeEnd('Solve Duration');

if (isSolvable) {
  printSudoku(backtracker.sudoku);
  console.log('Iterations:', backtracker.neededIterations);
} else {
  console.log('No solution found');
}