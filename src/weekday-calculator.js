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
  let twoDigits = this.year.substr(this.year.length-2);
  return twoDigits;
}

}
