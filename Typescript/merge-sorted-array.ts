const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    if (n) {
      let mIndex: number = m - 1, nIndex: number = n - 1;
      let curIndex: number = nums1.length - 1;
  
      while (curIndex >= 0) {
        if (mIndex < 0) {
          nums1[curIndex--] = nums2[nIndex--];
        } else if (nIndex < 0) {
          break;
        } else if (nums1[mIndex] < nums2[nIndex]) {
          nums1[curIndex--] = nums2[nIndex--];
        } else {
          nums1[curIndex--] = nums1[mIndex--];
        }
      }
    }
  };
  