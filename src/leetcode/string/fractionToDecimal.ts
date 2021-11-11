const fractionToDecimal = (
  numerator: number,
  denominator: number
): string => {
  if (numerator % denominator === 0)
    return String(Math.floor(numerator / denominator))

  const ret: string[] = []
  if (numerator * denominator < 0) ret.push('-')

  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  const intPart = Math.floor(numerator / denominator)
  ret.push(String(intPart))
  ret.push('.')

  const fractionPart: string[] = []
  const remainderIndexDic = new Map<number, number>()
  let remainder = numerator % denominator
  let index = 0
  while (
    remainder !== 0 &&
    !remainderIndexDic.has(remainder)
  ) {
    remainderIndexDic.set(remainder, index)
    remainder *= 10
    fractionPart.push(
      String(Math.floor(remainder / denominator))
    )
    remainder %= denominator
    index++
  }

  if (remainder !== 0) {
    const insertIndex = remainderIndexDic.get(remainder)
    fractionPart.splice(insertIndex, 0, '(')
    fractionPart.push(')')
  }

  ret.push(fractionPart.join(''))
  return ret.join('')
}
