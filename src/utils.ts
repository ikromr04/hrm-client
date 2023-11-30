import dayjs from 'dayjs';

export const getWorkTime = (startedTime: Date): string => {
  const date = dayjs();
  const years = Math.floor(date.diff(startedTime, 'year', true));
  const months = Math.floor(date.diff(startedTime, 'month', true)) % 12;
  const days = Math.floor(date.diff(startedTime, 'day', true) % 365 % 30.5);

  return `${years}г ${months}м ${days}д`;
};

export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor = 500,
) => {
  let timeout: ReturnType<typeof setTimeout> | number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
