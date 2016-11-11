/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/modules/chai/index.d.ts" />

import { expect } from 'chai';
import { SudokuBacktracker } from './sudoku-backtracker';

describe('SudokuBacktracker', function() {
  describe('.usedInRow()', function() {
    it('should return true if the number is used in a given row', function() {
      let grid = [
        [0,0,0,1,0,0,0,0,0]
      ];
      let backtracker = new SudokuBacktracker(grid);
      expect(backtracker.usedInRow(0, 1)).to.equal(true);
    });
  });
});