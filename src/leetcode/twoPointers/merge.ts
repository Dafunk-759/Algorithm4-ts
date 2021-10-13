/**
 Do not return anything, modify nums1 in-place instead.
 */
function mergeSpace(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  const temp = new Array(m + n).fill(0);
  let p1 = 0,
    p2 = 0;
  for (let i = 0; i < temp.length; i++) {
    if (p1 >= m) {
      temp[i] = nums2[p2];
      p2 += 1;
      continue;
    }
    if (p2 >= n) {
      temp[i] = nums1[p1];
      p1 += 1;
      continue;
    }
    if (nums1[p1] < nums2[p2]) {
      temp[i] = nums1[p1];
      p1 += 1;
    } else {
      temp[i] = nums2[p2];
      p2 += 1;
    }
  }
  for (let i = 0; i < temp.length; i++) {
    nums1[i] = temp[i];
  }
}
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p1 < 0) {
      nums1[i] = nums2[p2];
      p2 -= 1;
      continue;
    }
    if (p2 < 0) {
      nums1[i] = nums1[p1];
      p1 -= 1;
      continue;
    }
    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[i] = nums2[p2];
      p2 -= 1;
    }
  }
}
