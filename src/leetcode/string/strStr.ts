function strStr(haystack: string, needle: string): number {
  if (needle === "") return 0;
  let j: number;
  for (let i = 0; i < haystack.length; i++) {
    for (j = 0; j < needle.length; j++) {
      if (needle.charAt(j) !== haystack.charAt(i + j))
        break;
    }
    if (j === needle.length) return i;
  }
  return -1;
}

console.log(strStr("", ""));
