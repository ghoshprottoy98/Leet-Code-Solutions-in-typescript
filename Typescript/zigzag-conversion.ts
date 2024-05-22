function convert(s: string, numRows: number): string {
    if (numRows < 2) {
        return s;
    }
    
    // Change string to array
    let sarray: string[] = s.split(''),
        len: number = s.length,
        res: string[][] = [],
        index: number = 0,
        order: number = 1; // Indicates whether the traversal order is top-down or bottom-up
    
    for (let i = 0; i < numRows; i++) { // Initialize empty array elements
        res.push([]);
    }
    
    while (index < len) {
        for (let i = 0; i < numRows - 1; i++) {
            if (index >= len) {
                break;
            }
            if (order === 1) { // Determine the index of the array element to store based on the traversal order
                res[i].push(sarray[index]);    
            } else {
                res[numRows - 1 - i].push(sarray[index]);
            }
            
            index++;
        }
        order = -order;
    }
    
    res[0] = [res[0].join('')];
    for (let i = 1; i < numRows; i++) { // Merge arrays into a string
        res[0][0] += res[i].join('');
    }
    
    return res[0][0];
}
