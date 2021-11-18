const longestPalindrome = (s: string): number => {
  const count: Record<string, number> = Object.create(null)
  for (const c of s) {
    if (count[c] === undefined) count[c] = 1
    else count[c]++
  }

  let ret = 0
  let hasOdd = false
  for (const key in count) {
    const n = count[key]
    if (n % 2 === 0) ret += n
    else {
      ret += n - 1
      hasOdd = true
    }
  }

  return hasOdd ? ret + 1 : ret
}
const longestPalindrome2 = (s: string): number => {
  const map: Record<string, number> = Object.create(null)
  for (const c of s) {
    if (map[c] === undefined) map[c] = 1
    else map[c]++
  }

  const count = Object.values(map)
  const sum = count.reduce((acc, cur) => acc + cur)
  const oddN = count.reduce(
    (acc, cur) => (cur % 2 === 1 ? acc + 1 : acc),
    0
  )

  return oddN === 0 ? sum : sum - oddN + 1
}
