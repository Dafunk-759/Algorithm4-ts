const toI = (c: string) => c.charCodeAt(0) - 97
const removeDuplicateLetters = (s: string): string => {
  const count = new Array(26).fill(0)
  for (const c of s) {
    count[toI(c)]++
  }

  const stk: string[] = []
  const visited = new Array(26).fill(false)
  const end = (stk: string[]) => stk[stk.length - 1]
  for (const c of s) {
    if (visited[toI(c)]) {
      count[toI(c)]--
      continue
    }

    while (
      stk.length > 0 &&
      c <= end(stk) &&
      count[toI(end(stk))] > 1
    ) {
      count[toI(end(stk))]--
      const del = stk.pop()
      visited[toI(del)] = false
    }

    stk.push(c)
    visited[toI(c)] = true
  }

  return stk.join('')
}
