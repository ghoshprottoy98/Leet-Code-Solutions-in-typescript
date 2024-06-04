function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let prelen = prerequisites.length,
        maxNoCircle = numCourses * (numCourses - 1) / 2;
    if (!prelen) {
        return true;
    } else if (prelen > maxNoCircle) {
        return false;
    }

    let flags: number[] = [], // Stores unvisited nodes
        nodemarks: number[] = new Array(numCourses).fill(0), // Stores node visit markers
        edges: number[][] = new Array(numCourses).fill(0).map(() => []); // Stores edge information

    for (let i = 0; i < numCourses; i++) {
        flags.push(i);
    }

    for (let i = 0; i < prelen; i++) {
        let source = prerequisites[i][0],
            target = prerequisites[i][1];

        edges[target].push(source);
    }

    while (flags.length) {
        let node = flags[flags.length - 1];
        if (!dfsVisit(node)) {
            return false;
        }
        flags.pop();
    }

    return true;

    function dfsVisit(node: number): boolean {
        if (nodemarks[node]) {
            return false;
        }

        if (flags.indexOf(node) !== -1) {
            nodemarks[node] = 1;
            let elen = edges[node].length;
            for (let i = 0; i < elen; i++) {
                if (!dfsVisit(edges[node][i])) {
                    return false;
                }
            }
            nodemarks[node] = 0;
        }

        return true;
    }
}
