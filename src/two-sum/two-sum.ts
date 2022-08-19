export function twoSum(
    nums: number[],
    target: number
): number[] {
    const occurenceMap: {
        [key: number]: number;
    } = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complementOccurence =
            occurenceMap[target - num];

        if (
            complementOccurence !== undefined
        ) {
            return [complementOccurence, i];
        } else {
            occurenceMap[num] = i;
        }
    }

    return [];
}
