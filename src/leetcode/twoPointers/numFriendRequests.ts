const makeCount = (ages: number[]) => {
  const arr = new Array(121).fill(0);
  for (const age of ages) {
    arr[age] += 1;
  }
  return arr;
};
const canBeFriend = (a: number, b: number) => {
  if (b <= 0.5 * a + 7 || b > a || (b > 100 && a < 100))
    return false;
  return true;
};
const numFriendRequests = (ages: number[]): number => {
  const countArr = makeCount(ages);
  let ret = 0;
  for (let ageA = 1; ageA < countArr.length; ageA++) {
    for (let ageB = ageA; ageB < countArr.length; ageB++) {
      const count = countArr[ageA] * countArr[ageB];
      if (canBeFriend(ageA, ageB)) ret += count;
      if (canBeFriend(ageB, ageA)) ret += count;
      if (canBeFriend(ageA, ageB) && ageA === ageB)
        ret -= count + countArr[ageA];
    }
  }
  return ret;
};
