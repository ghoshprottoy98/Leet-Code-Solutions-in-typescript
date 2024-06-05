class UnionFind {
    private set_: number[];

    constructor() {
        this.set_ = [];
    }

    get_id(): number {
        this.set_.push(this.set_.length);
        return this.set_.length - 1;
    }

    find_set(x: number): number {
        if (this.set_[x] !== x) {
            this.set_[x] = this.find_set(this.set_[x]);  // Path compression.
        }
        return this.set_[x];
    }

    union_set(x: number, y: number): void {
        const x_root = this.find_set(x), y_root = this.find_set(y);
        if (x_root !== y_root) {
            this.set_[Math.min(x_root, y_root)] = Math.max(x_root, y_root);
        }
    }
}

function accountsMerge(accounts: string[][]): string[][] {
    const union_find = new UnionFind();
    const email_to_name: {[key: string]: string} = {};
    const email_to_id: {[key: string]: number} = {};

    for (const account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; ++i) {
            const email = account[i];
            if (!email_to_id.hasOwnProperty(email)) {
                email_to_name[email] = name;
                email_to_id[email] = union_find.get_id();
            }
            union_find.union_set(email_to_id[account[1]], email_to_id[email]);
        }
    }

    const lookup: {[key: number]: Set<string>} = {};
    for (const email in email_to_name) {
        const root = union_find.find_set(email_to_id[email]);
        if (!lookup.hasOwnProperty(root)) {
            lookup[root] = new Set<string>();
        }
        lookup[root].add(email);
    }

    const result: string[][] = [];
    for (const root in lookup) {
        const emails = Array.from(lookup[root]);
        const name = email_to_name[emails[0]];
        result.push([name, ...emails]);
    }
    return result;
}

// Example usage:
const accounts = [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]
];

console.log(accountsMerge(accounts));
