// iter
function replaceSpace(s: string): string {
  const loop = (index: number, ret: string): string => {
    if (index >= s.length) return ret;
    const nextRet = (oldRet: string) =>
      s.charAt(index) === " "
        ? oldRet + "%20"
        : oldRet + s.charAt(index);
    return loop(index + 1, nextRet(ret));
  };
  return loop(0, "");
}
//recursive
function replaceSpaceRecursive(s: string): string {
  const recursive = (s: string): string => {
    if (s.length === 0) return "";
    return s.charAt(0) === " "
      ? "%20" + recursive(s.substr(1))
      : s.charAt(0) + recursive(s.substr(1));
  };
  return recursive(s);
}
console.log(replaceSpace("We are happy"));
console.log(replaceSpaceRecursive("We are happy"));
