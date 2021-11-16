const isAdditiveSeq = (seq:number[]) => {
  if(seq.length < 3) return false
  for(let i = 2; i < seq.length; i++) {
    if(seq[i] !== seq[i - 1] + seq[i - 2]) return false
  }

  return true
}
const isAdditiveNumber = (num: string): boolean => {
  const seqArr: number[][] = []
  const dfs = (startIndex: number, seq: number[]) => {
    if (startIndex >= num.length) {
      seqArr.push(seq)
      return
    }
    for (let i = startIndex + 1; i <= num.length; i++) {
      const cur = num.slice(startIndex, i)
      if (cur.length >= 2 && cur[0] === '0') continue
      if (seq.length >= 2) {
        const pre = seq[seq.length - 1]
        if (Number(cur) < pre) continue
      }
      dfs(i, seq.concat(Number(cur)))
    }
  }
  dfs(0, [])
  
  return seqArr.some(isAdditiveSeq)
}
