const isValid = (s: string): boolean => {
  const stack: string[] = []
  for (const c of s) {
    if (c === '(') stack.push('(')
    else if (c === ')') {
      const top = stack.pop()
      if (top === undefined) return false
    }
  }
  return stack.length === 0
}
const removeInvalidParentheses = (s: string): string[] => {
  let lRemove = 0
  let rRemove = 0
  for (const c of s) {
    if (c === '(') lRemove++
    else if (c === ')') {
      if (lRemove === 0) rRemove++
      else lRemove--
    }
  }

  const parenthesesRe = /^[\)|\(]$/
  const ret = new Set<string>()
  const dfs = (
    curr: number,
    subStr: string,
    l: number,
    r: number
  ) => {
    if (l > lRemove || r > rRemove) return
    if (curr >= s.length) {
      if (isValid(subStr)) ret.add(subStr)
      return
    }

    if (!parenthesesRe.test(s[curr])) {
      dfs(curr + 1, subStr + s[curr], l, r)
    } else {
      dfs(curr + 1, subStr + s[curr], l, r)
      dfs(
        curr + 1,
        subStr,
        s[curr] === '(' ? l + 1 : l,
        s[curr] === ')' ? r + 1 : r
      )
    }
  }
  dfs(0, '', 0, 0)

  return Array.from(ret)
}
