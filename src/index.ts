function utcCalendarDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date;
}
export function weekdayIndex(isoDate: string): number {
  if (typeof isoDate !== 'string') throw new TypeError('Expected date text');
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!m) throw new RangeError('Expected YYYY-MM-DD');
  const y = Number(m[1]),
    month = Number(m[2]),
    day = Number(m[3]),
    date = utcCalendarDate(y, month, day);
  if (
    y < 1 ||
    date.getUTCFullYear() !== y ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  )
    throw new RangeError('Invalid calendar date');
  return date.getUTCDay();
}
