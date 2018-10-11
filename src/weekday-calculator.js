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
      20: 6
    }

    // const parseYear = parseInt(this.year);
    const parseMonth = parseInt(this.month);
    // const parseDay = parseInt(this.day);

    let lastTwoDigits = this.year.slice(-2);
    let parseLastTwoDigits = parseInt(lastTwoDigits); //double 00s = 0. Should be fine...
    let twoDigitsDivide = Math.floor(parseLastTwoDigits / 4);
    let twoDigitsPlusDay = twoDigitsDivide + parseInt(this.day);
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
    // let parseFirstTwoDigits =

    return afterLeapYearCheck;
    // console.log(plusMonthsKeyValue);
    // return plusMonthsKeyValue;

}
}
//resource used for algorithm: http://mathforum.org/dr.math/faq/faq.calendar.html
