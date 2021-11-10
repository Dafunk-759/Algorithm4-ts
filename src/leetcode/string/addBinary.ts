const format = (a: string, b: string) => {
  const pre0N = a.length - b.length
  if (pre0N > 0) b = '0'.repeat(pre0N) + b
  else a = '0'.repeat(-pre0N) + a
  return [a, b]
}
const addBinary = (a: string, b: string): string => {
  ;[a, b] = format(a, b)
  let ret = ''
  let c = 0
  for (let i = a.length - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + c
    if (sum < 2) {
      ret = `${sum}${ret}`
      c = 0
    }else {
      ret = `${sum - 2}${ret}`
      c = 1
    }
  }
  return c > 0 ? `${c}${ret}` : ret
}
console.log(
  addBinary('100111', '10'),
  addBinary('11', '11')
)
