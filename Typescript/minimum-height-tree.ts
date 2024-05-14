let findMinHeightTrees = function(n: number, edges: number[][]) {
    let elen = edges.length,
        nlist = [],
        deglist = [],
        adj = new Array(n);

    for (let i = 0; i < n; i++) {
        nlist.push(i);
        deglist.push(0);
        adj[i] = new Set();
    }
    for (let i = 0; i < elen; i++) {
        let source = edges[i][0],
            target = edges[i][1];

        adj[source].add(target);
        adj[target].add(source);
        deglist[source]++;
        deglist[target]++;
    }

    while (nlist.length > 2) {
        let lenNow = nlist.length,
            dellist = [];

        for (let i = 0; i < lenNow; i++) {
            let node = nlist[i];
            if (!deglist[node]) {
                nlist.splice(i--, 1);
                lenNow--;
            } else if (deglist[node] === 1) {
                let anothernode = -1;
                for (let j = 0; j < lenNow; j++) {
                    if (i === j) continue;
                    if (adj[node].has(nlist[j])) {
                        anothernode = nlist[j];
                        break;
                    }
                }
                adj[node].delete(anothernode);
                adj[anothernode].delete(node);
                dellist.push(anothernode);
                deglist[node] = 0;
                nlist.splice(i--, 1);
                lenNow--;
            }
        }

        for (let i = dellist.length - 1; i >= 0; i--) {
            deglist[dellist[i]]--;
        }
    }

    return nlist;
};
