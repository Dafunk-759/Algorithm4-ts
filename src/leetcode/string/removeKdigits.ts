const removePrefix0 = (s: string) => {
  let i = 0
  while (i < s.length - 1 && s[i] === '0') i++
  return s.slice(i)
}
const removeKdigits = (num: string, k: number): string => {
  const stk: number[] = []
  const top = (stk: number[]) => stk[stk.length - 1]

  for (const c of num) {
    const n = Number(c)
    while (k > 0 && stk.length > 0 && top(stk) > n) {
      stk.pop()
      k--
    }
    stk.push(n)
  }

  const ret = removePrefix0(
    stk.slice(0, stk.length - k).join('')
  )
  return ret === '' ? '0' : ret
}
