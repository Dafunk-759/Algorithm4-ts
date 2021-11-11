const largestNumber = (nums: number[]): string => {
  const compare = (a: number, b: number) => {
    const s1 = String(a)
    const s2 = String(b)
    return Number(s2 + s1) - Number(s1 + s2)
  }
  nums.sort(compare)
  const raw = nums.join('')

  let i = 0
  while (i < raw.length - 1 && raw[i] === '0') i++
  return raw.slice(i)
}
