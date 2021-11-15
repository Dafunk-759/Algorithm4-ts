const wordPattern = (
  pattern: string,
  s: string
): boolean => {
  const words = s.split(' ')
  if(words.length !== pattern.length) return false

  const pToWord = new Map<string, string>()
  const wordToP = new Map<string, string>()
  for(let i = 0; i < pattern.length; i++) {
    const p = pattern[i]
    const word = words[i]
    if(pToWord.has(p)) {
      if(pToWord.get(p) !== word) return false
    }
    if(wordToP.has(word)) {
      if(wordToP.get(word) !== p) return false
    }
    if(!pToWord.has(p) && !wordToP.has(word)) {
      pToWord.set(p, word)
      wordToP.set(word, p)
    }
  }

  return true
}
