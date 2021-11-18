const longestSubstring = (s: string, k: number): number => {
  const toI = (c: string) =>
    c.charCodeAt(0) - 'a'.charCodeAt(0)
  const emptyCount = () => new Array(26).fill(0)
  const count = emptyCount()
  for (const c of s) {
    count[toI(c)]++
  }

  let curCount = emptyCount()
  const gtK = (n:number) => n === 0 ? true : n >= k

  let ret = 0
  for(let l = 0; l < s.length; l++) {
    if(count[toI(s[l])] < k) continue

    curCount = emptyCount()
    for(let r = l; r < s.length; r++) {
      if(count[toI(s[r])] < k) break

      curCount[toI(s[r])]++
      if(curCount.every(gtK))
        ret = Math.max(ret, r - l + 1)
    }
  }

  return ret
}
