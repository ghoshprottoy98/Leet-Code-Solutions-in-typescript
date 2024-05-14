const countSegments = (s: string): number => {
    s = s.trim();
    if (s) {
        const re = new RegExp(' +');
        return s.split(re).length;
    }
    
    return 0;
};
