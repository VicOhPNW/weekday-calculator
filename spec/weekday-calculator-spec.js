import { Date2 } from '../src/weekday-calculator.js';

describe('isLeapYear', function() {
    it('shoud return true if a leap year', function() {
      let testYear = new Date2("2000", "10", "10");
        expect(testYear.isLeapYear()).toEqual(true);
    });
});

describe('findDay', function() {
    it('shoud return last 2 digits', function() {
        // Checking leap year
        var testYear = new Date2("2000", "10", "10");
        console.log(testYear);
        expect(testYear.findDay()).toEqual("Tuesday");

        // // Standard year
        // var testYear2 = new Date2("2018", "10", "10");
        // expect(testYear2.findDay()).toEqual("Wednesday");
        //
        // // Future outside range
        // var testYear3 = new Date2("3000", "10", "11");
        // expect(testYear3.findDay()).toEqual("Saturday");
    });
});
