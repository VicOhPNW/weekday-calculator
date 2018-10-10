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
  let twoDigits = this.year.slice(-2);
  console.log(parseInt(twoDigits));
  let parseTwoDigits = parseInt(twoDigits); //just added variable, but same result in test
  return parseTwoDigits;
}

}

//http://mathforum.org/dr.math/faq/faq.calendar.html
