const format = (s: string) => {
  const chars = s.split(/([\+|\-|\*|\/|\s])/)
  return chars.filter((c) => c.length > 0 && c !== ' ')
}
const calculate = (s: string): number => {
  const chars = format(s)
  const operands: number[] = []
  const operators: string[] = []
  const numRe = /\d+/
  const optRe = /^[\+|\-|\*|\/]$/

  for (const c of chars) {
    if (numRe.test(c)) {
      operands.push(Number(c))
      const topOpt = operators[operators.length - 1]
      if (topOpt === '*' || topOpt === '/') {
        operators.pop()
        const r = operands.pop()
        const l = operands.pop()
        if (r === undefined || l === undefined)
          throw new Error('lack of operands')
        operands.push(
          topOpt === '*' ? l * r : Math.floor(l / r)
        )
      }
    } else if (optRe.test(c)) {
      operators.push(c)
    } else throw new Error('bad exp')
  }

  let ret = operands[0]
  for (let i = 1; i < operands.length; i++) {
    const opt = operators[i - 1]
    const num = operands[i]
    ret += opt === '+' ? num : -num
  }
  return ret
}
