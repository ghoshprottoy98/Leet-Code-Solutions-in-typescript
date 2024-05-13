const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const len1: number = nums1.length;
    const len2: number = nums2.length;
  
    let left: number = (len1 + len2 + 1) >> 1;
    let right: number = (len1 + len2 + 2) >> 1;
  
    const getMedian = (
      n1: number[],
      s1: number,
      e1: number,
      n2: number[],
      s2: number,
      e2: number,
      k: number
    ): number => {
      const l1: number = e1 - s1 + 1;
      const l2: number = e2 - s2 + 1;
  
      if (l1 > l2) return getMedian(n2, s2, e2, n1, s1, e1, k);
      if (l1 === 0) return n2[s2 + k - 1];
  
      if (k == 1) return Math.min(n1[s1], n2[s2]);
  
      let i: number = s1 + Math.min(l1, k >> 1) - 1;
      let j: number = s2 + Math.min(l2, k >> 1) - 1;
  
      if (n1[i] > n2[j]) {
        return getMedian(n1, s1, e1, n2, j + 1, e2, k - (j - s2 + 1));
      } else {
        return getMedian(n1, i + 1, e1, n2, s2, e2, k - (i - s1 + 1));
      }
    };
  
    return (
      (getMedian(nums1, 0, len1 - 1, nums2, 0, len2 - 1, left) +
        getMedian(nums1, 0, len1 - 1, nums2, 0, len2 - 1, right)) /
      2
    );
  };
  