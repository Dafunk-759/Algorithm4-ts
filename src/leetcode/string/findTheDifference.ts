const countChar = (s: string) => {
  const count = new Array(26).fill(0)
  for (const c of s) {
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  return count
}
const findTheDifference = (
  s: string,
  t: string
): string => {
  const sCount = countChar(s)
  const tCount = countChar(s)

  for (let i = 0; i < sCount.length; i++) {
    if (tCount[i] === sCount[i] + 1)
      return String.fromCharCode(i + 'a'.charCodeAt(0))
  }

  throw new Error('bad test case')
}
