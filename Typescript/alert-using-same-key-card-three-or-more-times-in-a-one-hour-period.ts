// Time:  O(nlogn)
// Space: O(n)

class Solution {
    private readonly THRESHOLD: number = 3;

    alertNames(keyName: string[], keyTime: string[]): string[] {
        const nameToTimes: Map<string, number[]> = new Map();

        for (let i = 0; i < keyName.length; ++i) {
            const hour: number = parseInt(keyTime[i].substr(0, 2));
            const minute: number = parseInt(keyTime[i].substr(3));
            const totalMinutes: number = hour * 60 + minute;

            if (!nameToTimes.has(keyName[i])) {
                nameToTimes.set(keyName[i], []);
            }
            nameToTimes.get(keyName[i])!.push(totalMinutes);
        }

        const result: string[] = [];
        for (const [name, times] of nameToTimes.entries()) {
            times.sort((a, b) => a - b);

            for (let left = 0, right = 0; right < times.length; ++right) {
                while (times[right] - times[left] > 60) {
                    ++left;
                }

                if (right - left + 1 >= this.THRESHOLD) {
                    result.push(name);
                    break;
                }
            }
        }

        result.sort();
        return result;
    }
}
