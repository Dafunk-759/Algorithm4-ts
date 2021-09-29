function makeWallet() {
  const total = new Map<number, number>();
  const addChange = (change: number): void => {
    if (total.has(change))
      total.set(change, total.get(change) + 1);
    else total.set(change, 1);
  };
  const removeChange = (
    change: number,
    n: number
  ): boolean => {
    if (total.has(change) && total.get(change) >= n) {
      total.set(change, total.get(change) - n);
      return true;
    } else {
      return false;
    }
  };
  return {
    addChange,
    removeChange,
  };
}
function lemonadeChange(bills: number[]): boolean {
  const w = makeWallet();
  for (const bill of bills) {
    if (bill === 5) {
      w.addChange(5);
    } else if (bill === 10) {
      if (w.removeChange(5, 1)) w.addChange(10);
      else return false;
    } else if (bill === 20) {
      if (
        (w.removeChange(10, 1) && w.removeChange(5, 1)) ||
        w.removeChange(5, 3)
      )
        w.addChange(20);
      else return false;
    }
  }
  return true;
}
