const cal = (exp: string) => eval(exp)
const addOperators = (
  num: string,
  target: number
): string[] => {
  const subStrs: string[][] = []
  const dfs = (startIndex: number, path: string[]) => {
    if (startIndex >= num.length) {
      subStrs.push(path)
      return
    }

    for (let i = startIndex; i < num.length; i++) {
      const n = num.slice(startIndex, i + 1)
      if (n.length >= 2 && n[0] === '0') continue
      dfs(i + 1, path.concat(n))
    }
  }
  dfs(0, [])
  
  const exps = new Set<string>()
  const enumExp = (subStr: string[]) => {
    if (subStr.length <= 1) {
      if (Number(subStr[0]) === target) exps.add(subStr[0])
      return
    }
    const dfs = (
      s: string,
      len: number,
      left: string[]
    ) => {
      if (len - 1 >= subStr.length * 2 - 1) {
        const exp = s.slice(0, s.length - 1)
        if (cal(exp) === target) exps.add(exp)
        return
      }
      dfs(s + left[0] + '+', len + 2, left.slice(1))
      dfs(s + left[0] + '-', len + 2, left.slice(1))
      dfs(s + left[0] + '*', len + 2, left.slice(1))
    }
    dfs('', 0, subStr)
  }

  for (const subStr of subStrs) {
    enumExp(subStr)
  }

  return Array.from(exps)
}

const ret = addOperators('151916168', 51467)
console.log(ret.length)
