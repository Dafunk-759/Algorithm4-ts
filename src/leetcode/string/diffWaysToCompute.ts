const numRe = /\d+/
const optRe = /([\+|\-|\*])/
const toTokens = (exp: string) =>
  exp.split(optRe).filter((c) => c.length > 0)
const cal = (l: number, r: number, opt: string) => {
  if (opt === '+') return l + r
  if (opt === '-') return l - r
  return l * r
}
const diffWaysToCompute = (
  expression: string
): number[] => {
  const tokens = toTokens(expression)
  if (tokens.length === 1) return [Number(tokens[0])]
  if (tokens.length === 2) throw new Error('bad exp')
  if (tokens.length === 3) {
    return [
      cal(Number(tokens[0]), Number(tokens[2]), tokens[1])
    ]
  }

  const ret: number[] = []
  for (let i = 0; i < tokens.length; i++) {
    const c = tokens[i]
    if (numRe.test(c)) continue
    const left = diffWaysToCompute(
      tokens.slice(0, i).join('')
    )
    const right = diffWaysToCompute(
      tokens.slice(i + 1).join('')
    )
    for (const l of left) {
      for (const r of right) {
        ret.push(cal(l, r, c))
      }
    }
  }

  return ret
}
