const popN = (stk: string[], n: number) => {
  let ret = ''
  for (let i = 0; i < n; i++) {
    ret = `${stk.pop() || ''}${ret}`
  }
  return ret
}
const endI = (s: string, cur: number, reg: RegExp) => {
  let end = cur
  while (end < s.length && reg.test(s[end])) end++
  return end
}
const decodeString = (s: string): string => {
  const strs: string[] = []
  const nums: number[] = []
  const count: number[] = []
  const numRe = /\d+/
  const letterRe = /[a-z]+/
  const add1 = (stk: number[]) =>
    stk[stk.length - 1] !== undefined &&
    ++stk[stk.length - 1]

  let i = 0
  while (i < s.length) {
    if (numRe.test(s[i])) {
      const end = endI(s, i, numRe)
      nums.push(Number(s.slice(i, end)))
      add1(count)
      i = end
    } else if (letterRe.test(s[i])) {
      const end = endI(s, i, letterRe)
      strs.push(s.slice(i, end))
      add1(count)
      i = end
    } else if (s[i] === ']') {
      const pre = popN(strs, count.pop() || 0)
      const n = nums.pop() || 1
      strs.push(pre.repeat(n))
      i++
    } else if (s[i] === '[') {
      count.push(0)
      i++
    } else throw new Error('bad s')
  }

  return strs.join('')
}

const decodeString2 = (s: string): string => {
  const numRe = /\d+/
  const letterRe = /[a-z]+/
  let cur = 0

  const decode = (start: number): string => {
    if (start >= s.length) return ''
    if (s[start] === ']') {
      cur++
      return ''
    }

    if (numRe.test(s[start])) {
      const end = endI(s, start, numRe)
      const n = Number(s.slice(start, end))
      cur = end + 1
      let ret = ''
      ret += decode(cur).repeat(n)
      ret += decode(cur)
      return ret
    }

    if (letterRe.test(s[start])) {
      const end = endI(s, start, letterRe)
      const sub = s.slice(start, end)
      cur = end
      return sub + decode(cur)
    }

    throw new Error('never')
  }

  return decode(cur)
}
