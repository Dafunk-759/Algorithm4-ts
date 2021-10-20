const numRescueBoats = (
  people: number[],
  limit: number
): number => {
  people.sort((a, b) => a - b);
  let ret = 0;
  for (let l = 0, r = people.length - 1; l <= r; ret++) {
    if (people[l] + people[r] <= limit) {
      l += 1;
      r -= 1;
    } else {
      r -= 1;
    }
  }
  return ret;
};
