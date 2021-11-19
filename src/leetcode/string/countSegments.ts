const countSegments = (s: string): number => {
  return s.split(/\s+/).filter((s) => s.length > 0).length
}
const countSegments2 = (s: string): number => {
  let ret = 0
  for (let i = 0; i < s.length; ) {
    if (s[i] === ' ') i++
    else {
      ret++
      while (i < s.length && s[i] !== ' ') i++
    }
  }
  return ret
}
