const isPalindrome = (s: string) => {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return false;
  }
  return true;
};
const removePalindromeSub = (s: string): number => {
  if (isPalindrome(s)) return 1;
  return 2;
};
