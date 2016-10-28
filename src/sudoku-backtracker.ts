import * as _ from 'lodash';

export class SudokuBacktracker {
  private grid: number[][];
  private iterations: number = 0;

  constructor(grid: number[][]) {
    this.grid = _.cloneDeep(grid);
  }

  private findEmptyLocation(): number[] {
    let coords = [-1, -1];
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if (this.grid[x][y] === 0) {
          coords[0] = x;
          coords[1] = y;
          return coords;
        }
      }
    }
    return coords;
  }

  private usedInRow(row, number): boolean {
    for (let x = 0; x < 9; x++) {
      if (this.grid[row][x] === number) {
        return true;
      }
    }
    return false;
  }

  private usedInColumn(column, number): boolean {
    for (let y = 0; y < 9; y++) {
      if (this.grid[y][column] === number) {
        return true;
      }
    }
    return false;
  }

  private usedInSquare(row, column, number): boolean {
    row -= row % 3;
    column -= column % 3;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.grid[x + row][y + column] === number) {
          return true;
        }
      }
    }
    return false;
  }

  private isLocationSafe(row, column, number): boolean {
    return !this.usedInColumn(column, number) 
        && !this.usedInRow(row, number) 
        && !this.usedInSquare(row, column, number);
  }

  solve(): boolean {
    this.iterations++;

    let [row, column] = this.findEmptyLocation();
    if (row === -1 && column === -1) {
      return true;
    }

    for (let number = 1; number <= 9; number++) {
      if (this.isLocationSafe(row, column, number)) {
        this.grid[row][column] = number;
        if (this.solve()) {
          return true;
        }
        this.grid[row][column] = 0;
      }
    }

    return false;
  }

  get sudoku() {
    return this.grid;
  }

  get neededIterations() {
    return this.iterations;
  }
}