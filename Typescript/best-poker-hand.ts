// Time:  O(1)
// Space: O(1)

// freq table
class Solution {
    public bestHand(ranks: number[], suits: string[]): string {
      const LOOKUP: string[] = ["", "High Card", "Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush"];
  
      // Check for Flush efficiently using Set
      const isFlush = new Set(suits).size === 1;
  
      const cnt: number[] = Array(13).fill(0); // Pre-allocate and initialize count array
      for (const rank of ranks) {
        cnt[rank - 1]++;
      }
  
      const maxCount = Math.max(...cnt); // Use spread operator for efficient max
  
      // Determine hand type based on count and LOOKUP
      switch (maxCount) {
        case 4:
          return "Four of a Kind";
        case 3:
          // Check for Full House (three of a kind + pair)
          const hasPair = cnt.some((value) => value === 2);
          return hasPair ? "Full House" : "Three of a Kind";
        case 2:
          const numPairs = cnt.filter((value) => value === 2).length;
          return numPairs === 1 ? "Pair" : "Two Pair";
        default:
          // Straight handling (potential improvement discussed below)
          const isStraight = this.checkStraight(ranks);
          return isStraight ? (isFlush ? "Straight Flush" : "Straight") : LOOKUP[maxCount];
      }
    }
  
    // Optional improvement: Implement a more efficient straight checking algorithm
    private checkStraight(ranks: number[]): boolean {
      // ... (implementation for checking straight)
    }
  }
  