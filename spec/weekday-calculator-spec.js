import { Date2 } from './../src/weekday-calculator.js';

describe('isLeapYear', function() {
    it('shoud return true if a leap year', function() {
        var testYear = new Date2(2000, 10, 10);
        expect(testYear.isLeapYear(testYear.year)).toEqual(true);
    });
});
