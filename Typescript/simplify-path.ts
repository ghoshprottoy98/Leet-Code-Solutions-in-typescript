function simplifyPath(path: string): string {
    const len = path.length;
    const res: string[] = [];

    for (let i = 0; i < len;) {
        let tmp = '';
        while (path.charAt(i) === '/' && i < len) i++;
        while (path.charAt(i) !== '/' && i < len) {
            tmp += path.charAt(i);
            i++;
        }

        if (tmp === '..') {
            res.pop();
        } else if (tmp !== '.' && tmp !== '') {
            res.push(tmp);
        }
    }

    if (res.length === 0) {
        return '/';
    } else {
        return '/' + res.join('/');
    }
}
