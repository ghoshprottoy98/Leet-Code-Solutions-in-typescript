class Solution {
    categorizeBox(length: number, width: number, height: number, mass: number): string {
        const bulky: boolean = length >= 10000 || width >= 10000 || height >= 10000 || length * width * height >= 1000000000;
        const heavy: boolean = mass >= 100;
        
        if (bulky && heavy) {
            return "Both";
        }
        if (bulky) {
            return "Bulky";
        }
        if (heavy) {
            return "Heavy";
        }
        return "Neither";
    }
}

class Solution2 {
    categorizeBox(length: number, width: number, height: number, mass: number): string {
        const CATEGORIES: string[] = ["Neither", "Heavy", "Bulky", "Both"];
        const i: number = 2 * (length >= 10000 || width >= 10000 || height >= 10000 || length * width * height >= 1000000000) + (mass >= 100 ? 1 : 0);
        return CATEGORIES[i];
    }
}
