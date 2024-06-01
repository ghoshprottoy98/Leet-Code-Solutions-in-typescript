function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => b - a);
    const res: number[][] = [];
  
    const calCombs = (candis: number[], resArr: number[], targ: number): void => {
      if (!candis.length) return;
      console.log(candis, resArr, targ);
      const ele = candis[0];
  
      if (targ === ele) {
        res.push([...resArr, ele]);
      } else if (targ - ele > 0) {
        calCombs(candis.slice(), [...resArr, ele], targ - ele);
      }
  
      calCombs(candis.slice(1), [...resArr], targ);
    };
  
    calCombs(candidates, [], target);
  
    return res;
  }
  