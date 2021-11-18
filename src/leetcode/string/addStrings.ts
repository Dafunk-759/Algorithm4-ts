const format = (num1: string, num2: string) => {
  const diff = Math.abs(num1.length - num2.length)
  if (num1.length < num2.length) {
    return ['0'.repeat(diff) + num1, num2]
  }
  return [num1, '0'.repeat(diff) + num2]
}
const addStrings = (num1: string, num2: string): string => {
  ;[num1, num2] = format(num1, num2)

  let ret = ''
  let carrier = 0

  for (let i = num1.length - 1; i >= 0; i--) {
    const n1 = Number(num1[i])
    const n2 = Number(num2[i])
    const cur = n1 + n2 + carrier
    carrier = Math.floor(cur / 10)
    ret = `${cur % 10}${ret}`
  }

  return carrier > 0 ? `${carrier}${ret}` : ret
}
