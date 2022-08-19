// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

export function threeSum(
    nums: number[]
): number[][] {
    if (nums.length < 3) {
        return [];
    }

    const uniqueNumbers: number[] = [];

    const occurenceMap: {
        [num: number]: number;
    } = {};
    for (let num of nums) {
        if (occurenceMap[num]) {
            occurenceMap[num] =
                occurenceMap[num] + 1;
        } else {
            uniqueNumbers.push(num);
            occurenceMap[num] = 1;
        }
    }

    const results: number[][] = [];

    for (let firstNum of uniqueNumbers) {
        if (firstNum > 0) {
            continue;
        }

        for (let secondNum of uniqueNumbers) {
            if (
                firstNum === secondNum &&
                occurenceMap[firstNum] === 1
            ) {
                continue;
            }

            const neededNumber =
                0 - firstNum - secondNum;
            if (
                occurenceMap[neededNumber] &&
                ((neededNumber !==
                    firstNum &&
                    neededNumber !==
                        secondNum) ||
                    (firstNum === secondNum
                        ? occurenceMap[
                              neededNumber
                          ] > 2
                        : occurenceMap[
                              neededNumber
                          ] > 1))
            ) {
                const numbers = [
                    firstNum,
                    secondNum,
                    neededNumber,
                ].sort();

                if (
                    !results.find(
                        (n) =>
                            n[0] ===
                                numbers[0] &&
                            n[1] ===
                                numbers[1] &&
                            n[2] ===
                                numbers[2]
                    )
                ) {
                    results.push(numbers);
                }
            }
        }
    }

    return results;
}
