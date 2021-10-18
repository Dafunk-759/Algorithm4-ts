const findPrefix = (nums1: number[], nums2: number[]) => {
  let p1 = 0;
  for (
    let p2 = 0;
    p1 < nums1.length && nums1[p1] === nums2[p2];
    p1++, p2++
  );
  return p1;
};
function findUnsortedSubarray(nums: number[]): number {
  const sorted = nums.slice(0).sort((a, b) => a - b);
  const pre = findPrefix(sorted, nums);
  const post = findPrefix(sorted.reverse(), nums.reverse());
  const ret = nums.length - pre - post;
  return ret > 0 ? ret : 0;
}
