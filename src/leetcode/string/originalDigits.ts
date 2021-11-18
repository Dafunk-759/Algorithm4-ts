const originalDigits = (s: string): string => {
  const dic = [
    'z',
    'n',
    'w',
    'h',
    'u',
    'f',
    'x',
    's',
    'g',
    'i'
  ]
  const map: Record<string, number> = Object.create(null)
  for (const c of s) {
    if (map[c] === undefined) map[c] = 1
    else map[c]++
  }

  const ret: number[] = new Array(10).fill(0)
  for (const i of [0, 2, 4, 6, 8]) {
    if (!map[dic[i]]) continue

    ret[i] = map[dic[i]]
  }
  for (const i of [3, 5, 7]) {
    if (!map[dic[i]]) continue

    if (i === 3) {
      ret[i] = map[dic[i]] - ret[8]
    } else if (i === 5) {
      ret[i] = map[dic[i]] - ret[4]
    } else if (i === 7) {
      ret[i] = map[dic[i]] - ret[6]
    }
  }
  for (const i of [9, 1]) {
    if (!map[dic[i]]) continue

    if (i === 1) {
      ret[i] = map[dic[i]] - ret[7] - 2 * ret[9]
    } else if (i === 9) {
      ret[i] = map[dic[i]] - ret[5] - ret[6] - ret[8]
    }
  }

  return ret.map((n, i) => String(i).repeat(n)).join('')
}
