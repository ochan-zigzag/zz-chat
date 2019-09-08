import { Dayjs } from 'dayjs';

const week = ['일', '월', '화', '수', '목', '금', '토'];

export default function getKoreanDayOfWeek(date: Dayjs) {
  return week[date.day()];
}
