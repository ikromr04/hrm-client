/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor = 500,
) => {
  let timeout: ReturnType<typeof setTimeout> | number = 0

  const debounced = (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitFor)
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>
}

export const copy = (obj: object) => JSON.parse(JSON.stringify(obj))

export const MONTHS = [
  ['01', 'Январь'],
  ['02', 'Февраль'],
  ['03', 'Март'],
  ['04', 'Апрель'],
  ['05', 'Май'],
  ['06', 'Июнь'],
  ['07', 'Июль'],
  ['08', 'Август'],
  ['09', 'Сентябрь'],
  ['10', 'Октябрь'],
  ['11', 'Ноябрь'],
  ['12', 'Декабрь']
]
