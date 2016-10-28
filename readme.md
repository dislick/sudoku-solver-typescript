# Sudoku Solver

This is a sudoku solver using a backtracking algorithm. It is written in TypeScript and runs in every JavaScript environment. Please note that it runs ~2.5 times faster when compiling to ES5 because of a destructuring assignment.

## Usage

```TypeScript
import { SudokuBacktracker } from './sudoku-backtracker';

let grid = [[1, 2, 3, 4, 5, 6, 7, 8, 9], ...];

let backtracker = new SudokuBacktracker(grid);
let isSolvable = backtracker.solve();

// solved sudoku can now be found in `backtracker.sudoku`
```

## Run

```
npm install
gulp build
node dest/run.js
```

### Output

```
-----------------------
8     |       |       |
    3 | 6     |       |
  7   |   9   | 2     |
-----------------------
  5   |     7 |       |
      |   4 5 | 7     |
      | 1     |   3   |
-----------------------
    1 |       |   6 8 |
    8 | 5     |   1   |
  9   |       | 4     |
-----------------------
Solve Duration: 18.310ms
Iterations: 49559
-----------------------
8 1 2 | 7 5 3 | 6 4 9 |
9 4 3 | 6 8 2 | 1 7 5 |
6 7 5 | 4 9 1 | 2 8 3 |
-----------------------
1 5 4 | 2 3 7 | 8 9 6 |
3 6 9 | 8 4 5 | 7 2 1 |
2 8 7 | 1 6 9 | 5 3 4 |
-----------------------
5 2 1 | 9 7 4 | 3 6 8 |
4 3 8 | 5 2 6 | 9 1 7 |
7 9 6 | 3 1 8 | 4 5 2 |
-----------------------
```
