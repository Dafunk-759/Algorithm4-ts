const wordBreak = (
  s: string,
  wordDict: string[]
): string[] => {
  const N = s.length
  const set = new Set(wordDict)
  const ret:string[] = []

  const dfs = (sentence:string, startIndex:number) => {
    if(startIndex >= N) ret.push(sentence.trim())

    for(let i = startIndex; i < N; i++) {
      const word = s.slice(startIndex, i + 1)
      if(!set.has(word)) continue

      dfs(sentence + word + ' ', i + 1)
    }
  }

  dfs('', 0)
  return ret
}
