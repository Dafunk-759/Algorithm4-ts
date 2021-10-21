const takePoint = (
  point: number,
  max: number,
  cost: number,
  power: number
) => {
  point += 1;
  return [point, Math.max(max, point), power - cost];
};
const buyPower = (
  point: number,
  getPower: number,
  power: number
) => [point - 1, power + getPower];
const bagOfTokensScore = (
  tokens: number[],
  power: number
): number => {
  tokens.sort((a, b) => a - b);
  let points = 0,
    maxPoints = 0;
  for (let l = 0, r = tokens.length - 1; l <= r; ) {
    if (tokens[l] <= power) {
      [points, maxPoints, power] = takePoint(
        points,
        maxPoints,
        tokens[l],
        power
      );
      l += 1;
    } else {
      if (points > 0)
        [points, power] = buyPower(
          points,
          tokens[r],
          power
        );
      r -= 1;
    }
  }
  return maxPoints;
};
