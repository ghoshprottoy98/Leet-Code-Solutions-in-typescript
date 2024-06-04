class Solution {
    isOneBitCharacter(bits: number[]): boolean {
        let parity = 0;
        for (let i = bits.length - 2; i >= 0 && bits[i]; i--) {
            parity ^= bits[i];
        }
        return parity === 0;
    }
}
