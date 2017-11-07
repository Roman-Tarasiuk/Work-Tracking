export class TimeLib {
  static timeStr(total): string {
    var oneDay = 1000 * 3600 * 24;
    var totalDays = Math.floor(total / oneDay);
    if (total >= oneDay) {
      total -= totalDays * oneDay;
    }

    var oneHour = 1000 * 3600;
    var totalHours = Math.floor(total / oneHour);
    if (total >= oneHour){
      total -= totalHours * oneHour;
    }

    var oneMinute = 1000 * 60;
    var totalMinutes = Math.floor(total / oneMinute);
    if (total >= oneMinute) {
        total -= totalMinutes * oneMinute;
    }

    var oneSecond = 1000;
    var totalSeconds = Math.floor(total / oneSecond);

    return (totalDays > 0 ? (totalDays + 'd ') : '')
        + (totalHours > 0 ? (totalHours + 'h ') : '')
        + (totalMinutes > 0 ? (totalMinutes + 'm ') : '')
        + totalSeconds + 's';
  }
}