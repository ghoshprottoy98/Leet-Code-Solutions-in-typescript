class Solution {
    public asteroidCollision(asteroids: number[]): number[] {
      const result: number[] = [];
      for (const x of asteroids) {
        if (x > 0) {
          // Positive asteroids are always added
          result.push(x);
        } else {
          // Loop until a safe position for the negative asteroid is found
          while (result.length > 0 && result[result.length - 1] > 0 && Math.abs(result[result.length - 1]) < Math.abs(x)) {
            result.pop(); // Remove smaller positive asteroids
          }
          // Check for collision or complete destruction
          if (result.length > 0 && result[result.length - 1] > 0) {
            if (result[result.length - 1] === Math.abs(x)) { // Both explode
              result.pop();
            }
          } else {
            // No collision, add the negative asteroid
            result.push(x);
          }
        }
      }
      return result;
    }
  }
  