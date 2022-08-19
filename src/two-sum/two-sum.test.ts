import { twoSum } from './two-sum';

const twoSumScenarios: {
    nums: number[];
    target: number;
    expected: number[];
}[] = [
    {
        nums: [2, 11, 15, 7],
        target: 9,
        expected: [0, 3],
    },
    {
        nums: [3, 2, 4],
        target: 6,
        expected: [1, 2],
    },
    {
        nums: [1, 3, 3, 7],
        target: 6,
        expected: [1, 2],
    },
];

twoSumScenarios.forEach((s) => {
    test(`twoSum returns ${s.expected} for ${s.nums} and target ${s.target}`, () => {
        expect(
            twoSum(s.nums, s.target)
        ).toEqual(s.expected);
    });
});
