const joinWords =
  (maxWidth: number) =>
  (sentence: string[], isLastRow: boolean = false) => {
    if (isLastRow) {
      let ret = sentence.join(' ')
      const lastBlank = maxWidth - ret.length
      return ret + ' '.repeat(lastBlank)
    }
    const wordsLen = sentence.reduce(
      (acc, cur) => acc + cur.length,
      0
    )
    const blankCount = maxWidth - wordsLen
    const interval = sentence.length - 1
    if (interval <= 0)
      return sentence[0] + ' '.repeat(blankCount)
    const avg = Math.floor(blankCount / interval)
    const mod = blankCount % interval
    const blank = ' '.repeat(avg)

    let ret = ''
    for (let i = 0; i < mod; i++) {
      ret += sentence[i] + blank + ' '
    }
    ret += sentence.slice(mod).join(blank)
    return ret
  }
const fullJustify = (
  words: string[],
  maxWidth: number
): string[] => {
  const ret: string[] = []
  const toSentence = joinWords(maxWidth)
  for (let l = 0, r = 0; l < words.length; l = r) {
    let curLen = 0
    while (
      r < words.length &&
      (curLen += words[r].length + 1) <= maxWidth + 1
    )
      r++
    const sentence = words.slice(l, r)
    if (r < words.length) ret.push(toSentence(sentence))
    else ret.push(toSentence(sentence, true))
  }

  return ret
}
