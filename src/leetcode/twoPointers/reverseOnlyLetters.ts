const isLetter = (c: string) => /^[a-z]$/i.test(c);
const reverseOnlyLetters = (s: string): string => {
  const chars = s.split("");
  for (let l = 0, r = s.length - 1; l < r; ) {
    if (isLetter(chars[l]) && isLetter(chars[r])) {
      [chars[l], chars[r]] = [chars[r], chars[l]];
      l++, r--;
    }
    if (!isLetter(chars[l])) l++;
    if (!isLetter(chars[r])) r--;
  }
  return chars.join("");
};
