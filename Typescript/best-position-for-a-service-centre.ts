class GeometricMedian {
    static readonly EPS = 1e-6;
  
    getMinDistSum(positions: number[][]): number {
      // Calculate initial median using vector addition
      const median = {
        x: positions.reduce((sum, point) => sum + point[0], 0) / positions.length,
        y: positions.reduce((sum, point) => sum + point[1], 0) / positions.length,
      };
  
      let prevMedian: { x: number; y: number } | undefined;
  
      // Weiszfeld's algorithm with early termination
      while (!prevMedian || this.norm(prevMedian, median) * positions.length > this.EPS) {
        const [stopped, newMedian] = this.geometryMedian(positions, median);
        if (stopped) {
          break;
        }
        prevMedian = median;
        median = newMedian;
      }
  
      // Calculate total distance to median
      return positions.reduce((sum, point) => sum + this.norm(median, point), 0);
    }
  
    private norm(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
  
    private geometryMedian(positions: number[][], median: { x: number; y: number }): [boolean, { x: number; y: number }] {
      let numerator = { x: 0, y: 0 };
      let denominator = 0;
      for (const point of positions) {
        const distance = this.norm(median, point);
        if (distance === 0) {
          continue;
        }
        numerator.x += point[0] / distance;
        numerator.y += point[1] / distance;
        denominator += 1 / distance;
      }
  
      if (denominator === 0) {
        return [true, { x: 0, y: 0 }]; // Handle degenerate cases
      }
  
      return [false, { x: numerator.x / denominator, y: numerator.y / denominator }];
    }
  }
  
  // Example usage
  const points = [[1, 2], [3, 4], [5, 6]];
  const solver = new GeometricMedian();
  const minDistSum = solver.getMinDistSum(points);
  console.log(minDistSum);
  