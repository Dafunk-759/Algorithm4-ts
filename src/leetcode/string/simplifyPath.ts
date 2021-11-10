const pointRe = /^(\.)(\.)?$/
const simplifyPath = (path: string): string => {
  const paths = path.split('/').filter((s) => s.length > 0)
  const stack:string[] = []
  for(const path of paths) {
    if(pointRe.test(path)) {
      if(path.length === 2) stack.pop()
    }else {
      stack.push(path)
    }
  }
  return '/' + stack.join('/')
}
