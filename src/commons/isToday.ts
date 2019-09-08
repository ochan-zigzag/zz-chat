import dayjs, { Dayjs } from 'dayjs';

export default function isToday(date: Dayjs) {
  const startOfToday = dayjs().startOf('day');
  return date.isAfter(startOfToday);
}
