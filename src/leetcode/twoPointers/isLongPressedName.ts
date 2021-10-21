const isCharLP = (
  c1: string,
  n1: number,
  c2: string,
  n2: number
) => {
  if (c1 !== c2) return false;
  if (n1 > n2) return false;
  return true;
};
const isLongPressedName = (
  name: string,
  typed: string
): boolean => {
  let r1 = 0,
    r2 = 0;
  for (
    let l1 = 0, l2 = 0;
    r1 < name.length && r2 < typed.length;
    l1 = r1, l2 = r2
  ) {
    while (name[r1] === name[l1]) r1++;
    while (typed[r2] === typed[l2]) r2++;
    if (!isCharLP(name[l1], r1 - l1, typed[l2], r2 - l2))
      return false;
  }
  return r1 >= name.length && r2 >= typed.length;
};
