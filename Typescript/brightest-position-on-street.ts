// Time:  O(nlogn)
// Space: O(n)

class Solution {
    brightestPosition(lights: number[][]): number {
        const count: { [key: number]: number } = {};

        for (const light of lights) {
            const start = light[0] - light[1];
            const end = light[0] + light[1] + 1;
            if (!(start in count)) {
                count[start] = 0;
            }
            if (!(end in count)) {
                count[end] = 0;
            }
            count[start]++;
            count[end]--;
        }

        const points: [number, number][] = [];
        for (const k in count) {
            if (count.hasOwnProperty(k)) {
                points.push([parseInt(k), count[k]]);
            }
        }

        points.sort((a, b) => a[0] - b[0]);

        let result = Number.MIN_SAFE_INTEGER, maxCnt = 0, cnt = 0;
        for (const point of points) {
            cnt += point[1];
            if (cnt > maxCnt) {
                maxCnt = cnt;
                result = point[0];
            }
        }

        return result;
    }
}
