const lengthLongestPath = (input: string): number => {
  const rows = input.split('\n')
  const stk: string[] = []
  const pointRe = /\./
  const preTabCount = (s: string) => s.lastIndexOf('\t') + 1
  const top = (stk: string[]) => stk[stk.length - 1]
  const removeTab = (s: string) => s.replace(/\t/g, '')
  let ret = 0

  for (const r of rows) {
    while (
      top(stk) !== undefined &&
      preTabCount(top(stk)) >= preTabCount(r)
    )
      stk.pop()
    stk.push(r)
    if (pointRe.test(r)) {
      ret = Math.max(ret, removeTab(stk.join('/')).length)
    }
  }

  return ret
}
