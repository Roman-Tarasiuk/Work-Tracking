export class TimeLib {
  static readonly oneDay = 1000 * 3600 * 24;
  static readonly oneHour = 1000 * 3600;
  static readonly oneMinute = 1000 * 60;
  static readonly oneSecond = 1000;

  static timeStr(total): string {
    var t = TimeLib.splitTime(total);

    return (t.totalDays > 0 ? TimeLib.format(t.totalDays, '', 'd ') : '')
        + (t.totalHours > 0 ? TimeLib.format(t.totalHours, '', 'h ') : '')
        + (t.totalMinutes > 0 ? TimeLib.format(t.totalMinutes, '', 'm ') : '')
        + TimeLib.format(t.totalSeconds, '', 's');
  }

  static timeStrDigitalClock(total): string {
    var t = TimeLib.splitTime(total);

    return (t.totalDays > 0 ? TimeLib.format(t.totalDays, '', 'd ') : '')
        + (t.totalHours > 0 ? TimeLib.format(t.totalHours, '00', ':') : '')
        + (t.totalMinutes > 0 ? TimeLib.format(t.totalMinutes, '00', '') : '')
        + TimeLib.format(t.totalSeconds, ':00', '');
  }

  private static splitTime(total) {
    var totalDays = Math.floor(total / TimeLib.oneDay);
    if (total >= TimeLib.oneDay) {
      total -= totalDays * TimeLib.oneDay;
    }

    var totalHours = Math.floor(total / TimeLib.oneHour);
    if (total >= TimeLib.oneHour){
      total -= totalHours * TimeLib.oneHour;
    }

    var totalMinutes = Math.floor(total / TimeLib.oneMinute);
    if (total >= TimeLib.oneMinute) {
        total -= totalMinutes * TimeLib.oneMinute;
    }

    var totalSeconds = Math.floor(total / TimeLib.oneSecond);

    return {
      totalDays: totalDays,
      totalHours: totalHours,
      totalMinutes: totalMinutes,
      totalSeconds: totalSeconds
    };
  }

  private static format(n, prefix: string, suffix: string): string {
    var result = n.toString();

    if (result.length < prefix.length) {
      result = prefix.substr(0, prefix.length - result.length) + result;
    }

    return result + suffix;
  }
}