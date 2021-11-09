const compressString = (S: string): string => {
  let ret = ''
  for (let i = 0, j = 0; i < S.length; i = j) {
    while (S[i] === S[j]) j++
    ret += `${S[i]}${j - i}`
  }
  return ret.length < S.length ? ret : S
}
