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
});