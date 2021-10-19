const isPalindrome = (s: string) => {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return false;
  }
  return true;
};
const validPalindrome = (s: string): boolean => {
  for (let l = 0, r = s.length - 1; l < r; ) {
    if (s[l] === s[r]) {
      l += 1;
      r -= 1;
    } else {
      return (
        isPalindrome(s.slice(l + 1, r + 1)) ||
        isPalindrome(s.slice(l, r))
      );
    }
  }
  return true;
};
