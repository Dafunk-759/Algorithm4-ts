const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false

  const map = new Map<string, string>()
  const set = new Set<string>()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false
    } else {
      if (set.has(t[i])) return false
      map.set(s[i], t[i])
      set.add(t[i])
    }
  }

  return true
}
