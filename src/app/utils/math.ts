export function nearly(value: number, maxShift: number) {
  return value + Math.random() * maxShift * (Math.random() < 0.5 ? 1 : -1)
}
