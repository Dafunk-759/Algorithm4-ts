const lengthOfLastWord = (s: string): number => {
  const words = s.split(' ').filter((s) => s.length > 0)
  return words[words.length - 1].length
}
const lengthOfLastWord2 = (s: string): number => {
  const spaceRe = /\s/
  const letterRe = /[a-z|A-Z]/
  let lastStr = ''
  for (let i = 0, j = 0; i < s.length; i = j) {
    while (
      j < s.length &&
      ((spaceRe.test(s[i]) && spaceRe.test(s[j])) ||
        (letterRe.test(s[i]) && letterRe.test(s[j])))
    )
      j++
    const str = s.slice(i, j)
    lastStr = letterRe.test(str[0]) ? str : lastStr
  }
  return lastStr.length
}
