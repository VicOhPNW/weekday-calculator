import { Date2 } from '../src/weekday-calculator.js';

describe('isLeapYear', function() {
    it('shoud return true if a leap year', function() {
      let testYear = new Date2("2000", "10", "10");
        expect(testYear.isLeapYear()).toEqual(true);
    });
});

describe('findDay', function() {
    it('shoud return last 2 digits', function() {
        var testYear = new Date2("2000", "10", "10");
        var testYear2 = new Date2("2018", "10", "10");
        expect(testYear.findDay()).toEqual(0);
        expect(testYear2.findDay()).toEqual(18);
    });
});
