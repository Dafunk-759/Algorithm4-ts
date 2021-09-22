function removeDuplicates(s: string): string {
  const isEmpty = (stack: string[]) => stack.length === 0;
  const isTopSame = (stack: string[], c: string) =>
    stack[stack.length - 1] === c;
  const loop = (index: number, stack: string[]): string => {
    if (index >= s.length) return stack.join("");
    const c = s.charAt(index);
    if (isEmpty(stack)) {
      stack.push(c);
      return loop(index + 1, stack);
    }
    if (!isTopSame(stack, c)) {
      stack.push(c);
      return loop(index + 1, stack);
    }
    stack.pop();
    return loop(index + 1, stack);
  };
  return loop(0, []);
}
console.log(removeDuplicates("abbaca"));
