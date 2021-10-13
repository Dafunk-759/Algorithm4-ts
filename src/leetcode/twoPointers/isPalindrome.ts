const isLetterOrNum = (c: string): boolean =>
  /^[0-9|a-z]$/.test(c);
const format = (s: string): string =>
  s.toLowerCase().split("").filter(isLetterOrNum).join("");
const isPd = (s: string) => {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) return false;
  }
  return true;
};
function isPalindrome(s: string): boolean {
  return isPd(format(s));
}
