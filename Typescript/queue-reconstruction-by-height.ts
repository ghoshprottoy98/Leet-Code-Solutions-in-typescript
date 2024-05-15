function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => (b[0] - a[0]) || (a[1] - b[1]));

    let result: number[][] = [];
    people.forEach(item => {
        if (item[1] >= result.length) {
            result.push(item);
        } else {
            result = [...result.slice(0, item[1]), item, ...result.slice(item[1])];
        }
    });

    return result;
};