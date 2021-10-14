const isVowel = (c: string) => /^[a|e|i|o|u]$/i.test(c);
function reverseVowels(s: string): string {
  const chars = s.split("");
  for (let l = 0, r = chars.length - 1; l < r; ) {
    if (!isVowel(chars[l])) l += 1;
    if (!isVowel(chars[r])) r -= 1;
    if (isVowel(chars[l]) && isVowel(chars[r])) {
      [chars[l], chars[r]] = [chars[r], chars[l]];
      l += 1;
      r -= 1;
    }
  }
  return chars.join("");
}
