const generateParenthesis = (n: number): string[] => {
    const res: string[] = [];
   
    const subProblem = (p: string, left: number, right: number): void => {
        if (left) {
            subProblem(p + '(', left - 1, right);
        }
        if (right > left) {
            subProblem(p + ')', left, right - 1);
        }
        if (!right) {
            res.push(p);
        }
    };

    subProblem('', n, n);

    return res;
};
