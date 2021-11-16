const reverse = (s: string) =>
  s.split('').reverse().join('')
const isPalindrome = (
  word: string,
  l: number,
  r: number
): boolean => {
  while (l < r) {
    if (word[l] !== word[r]) return false
    l++, r--
  }
  return true
}
const palindromePairs = (words: string[]): number[][] => {
  const map = new Map<string, number>()
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], i)
  }

  const ret = new Set<string>()
  for (const word of words) {
    const cur = map.get(word)

    for (let i = 0; i <= word.length; i++) {
      const prefix = reverse(word.slice(0, i))
      const postfix = reverse(word.slice(i, word.length))

      if (
        isPalindrome(word, i, word.length - 1) &&
        map.has(prefix)
      ) {
        const other = map.get(prefix)
        if (other !== cur) ret.add(`${cur},${other}`)
      }
      if (
        isPalindrome(word, 0, i - 1) &&
        map.has(postfix)
      ) {
        const other = map.get(postfix)
        if (other !== cur) ret.add(`${other},${cur}`)
      }
    }
  }

  return Array.from(ret).map((raw) =>
    raw.split(',').map(Number)
  )
}
