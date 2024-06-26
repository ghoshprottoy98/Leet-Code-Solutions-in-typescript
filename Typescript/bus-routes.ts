class Solution {
    numBusesToDestination(routes: number[][], S: number, T: number): number {
        if (S === T) {
            return 0;
        }
        
        const toRoute: Map<number, Set<number>> = new Map();
        for (let i = 0; i < routes.length; ++i) {
            for (const stop of routes[i]) {
                if (!toRoute.has(stop)) {
                    toRoute.set(stop, new Set());
                }
                toRoute.get(stop)!.add(i);
            }
        }
        
        let result = 1;
        let q: number[] = [S];
        let lookup: Set<number> = new Set([S]);
        
        while (q.length > 0) {
            let nextQ: number[] = [];
            for (const stop of q) {
                const buses = toRoute.get(stop);
                if (buses) {
                    for (const i of buses) {
                        for (const nextStop of routes[i]) {
                            if (lookup.has(nextStop)) {
                                continue;
                            }
                            if (nextStop === T) {
                                return result;
                            }
                            nextQ.push(nextStop);
                            if (!toRoute.has(nextStop)) {
                                toRoute.set(nextStop, new Set());
                            }
                            toRoute.get(nextStop)!.delete(i);
                            lookup.add(nextStop);
                        }
                    }
                }
            }
            q = nextQ;
            result++;
        }
        
        return -1;
    }
}
