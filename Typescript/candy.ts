function candy(ratings: number[]): number {
    const candies: number[] = new Array(ratings.length).fill(1);
    const len = ratings.length;
  
    if (len <= 1) return len;
  
    for (let index = 1; index < len; index++) {
      if (ratings[index] > ratings[index - 1]) {
        candies[index] = candies[index - 1] + 1;
      }
    }
  
    let sum = candies[len - 1];
    for (let index = len - 2; index >= 0; index--) {
      if (ratings[index] > ratings[index + 1] && candies[index] <= candies[index + 1]) {
        candies[index] = candies[index + 1] + 1;
      }
      sum += candies[index];
    }
  
    return sum;
  }
  