function candy(ratings: number[]): number {
  if (ratings.length <= 0) return 0;
  let count: number[] = [1];
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      count[i] = count[i - 1] + 1;
    } else {
      count[i] = 1;
    }
  }
  for (let i = ratings.length - 1; i > 0; i--) {
    if (
      ratings[i] < ratings[i - 1] &&
      count[i] >= count[i - 1]
    ) {
      count[i - 1] = count[i] + 1;
    }
  }
  return count.reduce((acc, curr) => acc + curr, 0);
}
