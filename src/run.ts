/// <reference path="../typings/index.d.ts" />

import { SudokuBacktracker } from './sudoku-backtracker';

/**
 * Prints a sudoku grid to stdout, not needed for the actual algorithm.
 */
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

// Define a sudoku with a few numbers filled in.
// Fun fact: According to The Telegraph this is the hardest sudoku in the world,
// read more here:
// http://www.telegraph.co.uk/news/science/science-news/9359579/Worlds-hardest-sudoku-can-you-crack-it.html
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

// Print the unsolved sudoku
printSudoku(grid);

// Load the unsolved sudoku into the backtracker
let backtracker = new SudokuBacktracker(grid);

// Solve the sudoku and measure how long it took
console.time('Solve Duration');
let isSolvable = backtracker.solve();
console.timeEnd('Solve Duration');

// Print the solved sudoku if possible
if (isSolvable) {
  console.log('Iterations:', backtracker.neededIterations);
  printSudoku(backtracker.sudoku);  
} else {
  console.log('No solution found');
}