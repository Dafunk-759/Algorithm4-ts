const popN = <T>(arr: T[], n: number) => {
  const ret: T[] = []
  for (let i = 0; i < n; i++) {
    ret.push(arr.pop())
  }
  return ret
}
const cal = (operands: number[], operators: string[]) => {
  while (operators.length > 0) {
    const opt = operators.pop()
    const l = operands.pop()
    const r = operands.pop()
    let ret: number
    if (opt === '+') {
      ret = l + r
    } else if (opt === '-') {
      ret = l - r
    } else throw new Error('only + or -')
    operands.push(ret)
  }
  return operands[0]
}
const format = (s: string) => {
  const arr = s.split(/([\+|\-|\s|\)|\(])/)
  return arr.filter((c) => c.length > 0 && c !== ' ')
}
const calculate = (s: string): number => {
  const chars = format(`(${s})`)

  const operands: number[] = []
  const operators: string[] = []
  const operandsCount: number[] = []
  const numRe = /\d+/

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i]

    if (c === '(') {
      if (operandsCount.length > 0)
        operandsCount[operandsCount.length - 1]++
      operandsCount.push(0)
    } else if (numRe.test(c)) {
      operands.push(Number(c))
      operandsCount[operandsCount.length - 1]++
    } else if (c === '+' || c === '-') {
      if (
        chars[i - 1] === '(' ||
        chars[i - 1] === '+' ||
        chars[i - 1] === '-'
      ) {
        operands.push(0)
        operandsCount[operandsCount.length - 1]++
      }
      operators.push(c)
    } else if (c === ')') {
      const count = operandsCount.pop()
      if (count === undefined || count === 0)
        throw new Error('bad exp')
      const opds: number[] = popN(operands, count)
      const opts: string[] = popN(operators, count - 1)
      operands.push(cal(opds, opts))
    }
  }

  return operands[0]
}
