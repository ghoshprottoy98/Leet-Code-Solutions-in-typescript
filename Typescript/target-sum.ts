const twoSum =(nums:Array<number>, target:number): Array<number>  => {

	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if ( addition(nums[i], nums[j]) === target ) {
				return [j, i];
			}
		}
	}

    return [];
};

// add a with b and return it
const addition = (a:number, b:number) => {
	return a + b;
};