// Time:  +:        O(d * t), t is the number of terms, d is the average degree of terms
//        -:        O(d * t)
//        *:        O(d * t^2)
//        eval:     O(d * t)
//        to_list:  O(d * tlogt)
// Space: O(e + d * t), e is the number of evalvars

class Poly {
    public:
      constructor() {}
  
      constructor(expr: string) {
        const key: string[] = [];
        if (this.is_number(expr)) {
          if (parseInt(expr)) {
            this.polies_[key] = parseInt(expr);
          }
        } else {
          key.push(expr);
          ++this.polies_[key];
        }
      }
  
      operator +(rhs: Poly): Poly {
        const result = new Poly();
        for (const [kvp] of Object.entries(this.polies_)) {
          result.update(kvp[0], kvp[1]);
        }
        for (const [kvp] of Object.entries(rhs.polies_)) {
          result.update(kvp[0], kvp[1]);
        }
        return result;
      }
  
      operator -(rhs: Poly): Poly {
        const result = new Poly();
        for (const [kvp] of Object.entries(this.polies_)) {
          result.update(kvp[0], kvp[1]);
        }
        for (const [kvp] of Object.entries(rhs.polies_)) {
          result.update(kvp[0], -kvp[1]);
        }
        return result;
      }
  
      operator *(rhs: Poly): Poly {
        const result = new Poly();
        for (const [kvp1] of Object.entries(this.polies_)) {
          for (const [kvp2] of Object.entries(rhs.polies_)) {
            result.update(this.merge(kvp1[0].split(""), kvp2[0].split("")), kvp1[1] * kvp2[1]);
          }
        }
        return result;
      }
  
      eval(lookup: { [key: string]: number }): Poly {
        const result = new Poly();
        for (const [kvp] of Object.entries(this.polies_)) {
          const key: string[] = [];
          let c = kvp[1];
          for (const token of kvp[0].split("")) {
            if (lookup.hasOwnProperty(token)) {
              c *= lookup[token];
            } else {
              key.push(token);
            }
          }
          result.update(key, c);
        }
        return result;
      }
  
      toString(): string[] {
        const sorted = new Map<string[], number>(this.polies_, (a, b) => (a.length !== b.length ? a.length > b.length : a < b));
        const result: string[] = [];
        for (const [kvp] of sorted.entries()) {
          const tmp = kvp[0].slice();
          tmp.unshift(kvp[1].toString());
          result.push(this.join(tmp, "*"));
        }
        return result;
      }
  
    private:
      is_number(s: string): boolean {
        return !s.isEmpty() && s.split("").every((char) => char >= "0" && char <= "9");
      }
  
      update(key: string[], val: number): void {
        this.polies_[key] = (this.polies_[key] || 0) + val;
        if (this.polies_[key] === 0) {
          delete this.polies_[key];
        }
      }
  
      merge(arr1: string[], arr2: string[]): string[] {
        const result: string[] = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length || j < arr2.length) {
          if (j === arr2.length || (i !== arr1.length && arr1[i] < arr2[j])) {
            result.push(arr1[i++]);
  