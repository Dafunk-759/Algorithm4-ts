const convertToTitle = (columnNumber: number): string => {
  let ret = ''
  while (columnNumber > 0) {
    columnNumber--
    ret = `${String.fromCharCode(
      (columnNumber % 26) + 65
    )}${ret}`
    columnNumber = Math.floor(columnNumber / 26)
  }
  return ret
}
const titleToNumber = (columnTitle: string): number => {
  const toNum = (s: string) => s.charCodeAt(0) - 64
  const N = columnTitle.length

  let ret = 0
  for (let i = 0; i < N; i++) {
    const char = columnTitle[i]
    ret += toNum(char) * 26 ** (N - 1 - i)
  }
  return ret
}
