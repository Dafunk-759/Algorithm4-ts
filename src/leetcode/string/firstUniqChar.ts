const firstUniqChar = (s: string): number => {
  const toI = (c:string) => c.charCodeAt(0) - 'a'.charCodeAt(0)
  const count = new Array(26).fill(0)
  for (const c of s) {
    count[toI(c)]++
  }

  for(let i = 0; i < s.length; i++) {
    if(count[toI(s[i])] === 1) return i
  }

  return -1
}
