const characterReplacement = (
  s: string,
  k: number
): number => {
  const count = new Array(26).fill(0)
  const sum = (count: number[]) =>
    count.reduce((acc, cur) => acc + cur)
  const max = (count: number[]) => Math.max(...count)
  const isValid = (count: number[]) =>
    sum(count) - max(count) <= k
  const toI = (c: string) =>
    c.charCodeAt(0) - 'A'.charCodeAt(0)

  let ret = 0
  for (let l = 0, r = 0; r < s.length; r++) {
    count[toI(s[r])]++
    if (isValid(count)) {
      ret = Math.max(ret, sum(count))
    } else {
      while (l < r && !isValid(count)) {
        count[toI(s[l])]--
        l++
      }
    }
  }

  return ret
}
