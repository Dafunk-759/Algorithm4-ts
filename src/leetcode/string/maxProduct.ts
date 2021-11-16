const hasSameChar = (s1: string, s2: string) => {
  const set = new Set(s1)
  for (const c of s2) {
    if (set.has(c)) return true
  }
  return false
}
const maxProduct = (words: string[]): number => {
  words.sort((a, b) => b.length - a.length)

  let ret = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!hasSameChar(words[i], words[j]))
        ret = Math.max(
          ret,
          words[i].length * words[j].length
        )
    }
  }

  return ret
}
