function getHint(secret: string, guess: string): string {
    const arrLen = secret.length;
    let strA = 0;
    let strB = 0;
    const secMap: number[] = new Array(10).fill(0); // Pre-initialize with zeros for efficiency
    const gueMap: number[] = new Array(10).fill(0); // Pre-initialize with zeros for efficiency
  
    for (let index = 0; index < arrLen; index++) {
      if (secret[index] === guess[index]) {
        strA++;
      } else {
        const secNum = parseInt(secret[charAt(index)]); // Use charAt for type safety
        const gueNum = parseInt(guess.charAt(index)); // Use charAt for type safety
  
        secMap[secNum] = (secMap[secNum] || 0) + 1; // Concise nullish coalescing assignment
        gueMap[gueNum] = (gueMap[gueNum] || 0) + 1; // Concise nullish coalescing assignment
      }
    }
  
    for (let index = 0; index < 10; index++) {
      strB += (secMap[index] && gueMap[index]
               ? Math.min(secMap[index], gueMap[index]) // Optimized min calculation
               : 0);
    }
  
    // Remove commented-out console log as it's not part of the function's responsibility
  
    return `${strA}A${strB}B`;
  }
  