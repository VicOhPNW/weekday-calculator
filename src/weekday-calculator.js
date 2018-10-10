export class Fart {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  isLeapYear() {
    if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
      return true;
      } else {
      return false;
    }
  }
}
