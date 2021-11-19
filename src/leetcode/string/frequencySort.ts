const frequencySort = (s: string): string => {
  const map = new Map<string, number>()
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }

  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map(([c, n]) => c.repeat(n))
    .join('')
}
