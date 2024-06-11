// Time:  ctor:    O(m), m is the number of all products
//        getBill: O(p), p is the number of products to bill
// Space: O(m)

class Cashier {
    private n: number;
    private discount: number;
    private curr: number;
    private lookup: Map<number, number>;

    constructor(n: number, discount: number, products: number[], prices: number[]) {
        this.n = n;
        this.discount = discount;
        this.curr = 0;
        this.lookup = new Map();

        for (let i = 0; i < products.length; ++i) {
            this.lookup.set(products[i], prices[i]);
        }
    }
    
    getBill(products: number[], amount: number[]): number {
        this.curr = (this.curr + 1) % this.n;
        let result = 0.0;
        
        for (let i = 0; i < products.length; ++i) {
            const price = this.lookup.get(products[i]);
            if (price !== undefined) {
                result += price * amount[i];
            }
        }

        return this.curr === 0 ? result * (1.0 - this.discount / 100.0) : result;
    }
}
