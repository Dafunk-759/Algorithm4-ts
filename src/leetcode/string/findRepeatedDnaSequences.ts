const findRepeatedDnaSequences = (s: string): string[] => {
  const N = s.length
  if(N < 10) return []

  const set = new Set<string>()
  const ret = new Set<string>()
  for(let i = 0, j = 9; j < N; i++, j++) {
    const sub = s.slice(i, j + 1)
    if(set.has(sub)) ret.add(sub)
    else set.add(sub)
  }
  return Array.from(ret)
}
