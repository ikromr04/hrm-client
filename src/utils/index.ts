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
