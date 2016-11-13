/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/modules/chai/index.d.ts" />

import { expect } from 'chai';
import { SudokuBacktracker } from './sudoku-backtracker';

describe('SudokuBacktracker', () => {
  describe('.usedInRow()', () => {
    it('should return true if the number is used in a given row', () => {
      let grid = [
        [0,0,0, 1,0,0, 0,0,0]
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInRow(0, 1)).to.equal(true);
    });

    it('should return true if the number is used multiple times in a given row', () => {
      let grid = [
        [0,2,2, 0,0,0, 0,2,0]
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInRow(0, 2)).to.equal(true);
    });

    it('should return false if the number is not used in a given row', () => {
      let grid = [
        [0,0,3, 2,0,1, 0,5,4]
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInRow(0, 7)).to.equal(false);
    });
  });

  describe('.usedInColumn()', () => {
    it('should return true if the number is used in a given column', () => {
      let grid = [
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [1,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInColumn(0, 1)).to.equal(true);
    });

    it('should return true if the number is used multiple times in a given column', () => {
      let grid = [
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,2,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,2,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,2,0, 0,0,0],
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInColumn(4, 2)).to.equal(true);
    });

    it('should return false if the number is not used in a given column', () => {
      let grid = [
        [0,0,0, 5,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 2,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 3,0,0, 0,0,0],
        [0,0,0, 4,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 1,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInColumn(3, 6)).to.equal(false);
    });
  });

  describe('.usedInSquare()', () => {
    it('should return true if the number is used in a given square', () => {
      let grid = [
        [0,0,0, 0,0,0, 0,0,0],
        [0,1,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],

        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,0, 0,0,0, 0,0,0],
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInSquare(1, 1, 1)).to.equal(true);
    });
  });

  describe('.solve()', () => {
    it('should solve a test sudoku', () => {
      // There is only one solution possible to this sudoku
      let testSudoku = [
        [2,0,0, 0,7,6, 0,4,8],
        [0,0,0, 0,0,0, 2,0,9],
        [0,0,0, 1,0,0, 0,0,0],

        [0,0,4, 6,9,0, 0,0,0],
        [9,2,0, 0,0,1, 3,0,0],
        [6,0,0, 8,0,5, 0,0,0],

        [1,4,7, 2,0,3, 0,5,6],
        [8,9,0, 5,0,0, 1,0,0],
        [0,0,3, 9,1,0, 8,0,7]
      ];
      let expectedOutput = [
        [2,1,9, 3,7,6, 5,4,8],
        [7,3,6, 4,5,8, 2,1,9],
        [4,8,5, 1,2,9, 6,7,3],

        [3,5,4, 6,9,2, 7,8,1],
        [9,2,8, 7,4,1, 3,6,5],
        [6,7,1, 8,3,5, 4,9,2],

        [1,4,7, 2,8,3, 9,5,6],
        [8,9,2, 5,6,7, 1,3,4],
        [5,6,3, 9,1,4, 8,2,7]
      ];

      let backtracker = new SudokuBacktracker(testSudoku);
      let output = backtracker.solve();
      expect(output).to.eql(expectedOutput);
    });
  });
});