//dfs overtime
function isValidSerialization(preorder: string): boolean {
  const format = (preorder: string): string[] =>
    preorder.split(",");
  const mem = (f: (...args: any) => any) => {
    const cache = {} as any;
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache[key] === undefined)
        cache[key] = f.apply(null, args);
      return cache[key];
    };
  };
  const memDfs = mem(dfs);
  function dfs(preorder: string[]): boolean {
    if (preorder.length === 1) return preorder[0] === "#";
    if (preorder.length === 2) return false;
    if (preorder[0] === "#") return false;

    const start = 1;
    const end = preorder.length - 2;
    for (let i = start; i <= end; i++) {
      const leftSub = preorder.slice(start, i + 1);
      const rightSub = preorder.slice(i + 1);
      if (memDfs(leftSub) && memDfs(rightSub)) return true;
    }
    return false;
  }
  if (preorder.length <= 0) throw new Error("bad preorder");
  return dfs(format(preorder));
}
//slot
function isValidSerializationSlot(
  preorder: string
): boolean {
  const slots = [1];
  const preOrder = preorder.split(",");
  for (let i = 0; i < preOrder.length; i++) {
    if (slots.length <= 0) return false;
    slots[slots.length - 1] -= 1;
    if (slots[slots.length - 1] === 0) slots.pop();
    if (preOrder[i] !== "#") slots.push(2);
  }
  return slots.length === 0;
}
