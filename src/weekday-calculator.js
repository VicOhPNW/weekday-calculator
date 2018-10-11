export class Date2 {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  isLeapYear() {
    let parseYear = parseInt(this.year);
    if ((parseYear % 4 === 0) && (parseYear % 100 !== 0) || (parseYear % 400 === 0)) {
      return true;
      } else {
      return false;
    }
  }

  findDay() {
    const Months = {
      1: 1,
      2: 4,
      3: 4,
      4: 0,
      5: 2,
      6: 5,
      7: 0,
      8: 3,
      9: 6,
      10:1,
      11:4,
      12:6
    };

    const Centuries = {
      17: 4,
      18: 2,
      19: 0,
      20: 6,
      21: 4,
      22: 2,
      23: 0,
      24: 6,
      25: 4,
      26: 2,
      27: 0,
      28: 6,
      29: 4,
      30: 2,
      31: 0,
      32: 6,
      33: 4,
      34: 2,
      35: 0,
    }

    const Days = {
      0: "Sorry! Womp womp.",
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday"
    }

    const parseMonth = parseInt(this.month);
    const parseDay = parseInt(this.day);

    let lastTwoDigits = this.year.slice(-2);
    let parseLastTwoDigits = parseInt(lastTwoDigits);
    let twoDigitsDivide = Math.floor(parseLastTwoDigits / 4);
    // console.log(twoDigitsDivide);
    let twoDigitsPlusDay = twoDigitsDivide + parseDay;
    let plusMonthsKeyValue = twoDigitsPlusDay + Months[this.month];
    let afterLeapYearCheck = 0;
    if(this.isLeapYear() === true){
      if(parseMonth === 1 || parseMonth === 2){
        afterLeapYearCheck = plusMonthsKeyValue - 1;
      }
    } else {
      afterLeapYearCheck = plusMonthsKeyValue;
    }

    let firstTwoDigits = this.year.slice(0,2);

    let GregorianValueAdded = afterLeapYearCheck + Centuries[firstTwoDigits];

    let LastTwoGregorianAdded = parseLastTwoDigits + GregorianValueAdded;

    let ModuloBy7 = LastTwoGregorianAdded % 7;

    let Day = Days[ModuloBy7];

    console.log(Day);

    return Day;

}
}
//resource used for algorithm: http://mathforum.org/dr.math/faq/faq.calendar.html
