//暴力 leet-code 214 (最后一个人用例没通过)
const reverse = (s: string) =>
  s.split('').reverse().join('')
const shortestPalindrome = (s: string): string => {
  let prefixEndIndex = 1
  for (let i = 1; i <= s.length; i++) {
    const prefix = s.slice(0, i)
    if (reverse(prefix) === prefix) prefixEndIndex = i
  }

  const left = s.slice(prefixEndIndex)
  return reverse(left) + s
}
