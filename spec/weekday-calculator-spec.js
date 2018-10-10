import { Fart } from '../src/weekday-calculator.js';

describe('isLeapYear', function() {
    it('shoud return true if a leap year', function() {
      let testYear = new Fart(2000, 10, 10);
        expect(testYear.isLeapYear()).toEqual(true);
    });
});
