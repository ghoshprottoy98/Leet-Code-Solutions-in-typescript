function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    let prelen = prerequisites.length;
    let maxNoCircle = numCourses * (numCourses - 1) / 2;

    // When all nodes are connected by edges, the maximum number of acyclic edges
    if (prelen > maxNoCircle) {
        return [];
    }

    let queue: number[] = []; // Stores the BFS sequence of nodes to be visited
    let flags: boolean[] = []; // Stores whether the node has been visited or not
    let res: number[] = []; // Result array
    let nodedegree: number[] = new Array(numCourses).fill(0); // Stores the total number of edges per node
    let edges: number[][] = new Array(numCourses).fill(0).map(() => []); // Stores edge information, each element's array represents its subsequent courses

    for (let i = 0; i < numCourses; i++) {
        flags[i] = false;
    }

    for (let i = 0; i < prelen; i++) {
        let source = prerequisites[i][0];
        let target = prerequisites[i][1];

        edges[target].push(source);
        nodedegree[source]++;
        nodedegree[target]++;
    }

    for (let i = 0; i < numCourses; i++) {
        if (nodedegree[i] === edges[i].length) {
            queue.push(i);
        }
    }

    if (bfsVisit()) {
        return res;
    } else {
        return [];
    }

    function bfsVisit(): boolean {
        while (queue.length) {
            let current = queue.shift() as number; // Current node being visited
            let elen = edges[current].length; // Number of edges

            res.push(current);
            flags[current] = true;
            for (let i = 0; i < elen; i++) {
                let target = edges[current][i];
                if (flags[target]) {
                    return false; // There is a loop, return false
                }
                if (--nodedegree[target] === edges[target].length) {
                    queue.push(target);
                }
            }
            edges[current] = [];
            nodedegree[current] -= elen;
        }

        if (res.length < numCourses) {
            return false;
        }
        return true;
    }
}
