class Solution {
    public averageHeightOfBuildings(buildings: number[][]): number[][] {
      const points: [number, number, number][] = [];
      for (const building of buildings) {
        points.push([building[0], 1, building[2]]);
        points.push([building[1], -1, building[2]]);
      }
  
      points.sort((a, b) => a[0] - b[0]);
  
      const result: number[][] = [];
      let total = 0;
      let count = 0;
      let prev = -1;
  
      for (const [curr, c, h] of points) {
        if (count && prev !== curr) {
          if (result.length > 0 && result[result.length - 1][1] === prev && result[result.length - 1][2] === total / count) {
            result[result.length - 1][1] = curr;
          } else {
            result.push([prev, curr, Math.floor(total / count)]);
          }
        }
        total += h * c;
        count += c;
        prev = curr;
      }
  
      return result;
    }
  }
  