import { threeSum } from './three-sum';

const threeSumScenarios: {
    nums: number[];
    expected: number[][];
}[] = [
    {
        nums: [-1, 0, 1, 2, -1, -4],
        expected: [
            [-1, -1, 2],
            [-1, 0, 1],
        ],
    },
    {
        nums: [],
        expected: [],
    },
    {
        nums: [0],
        expected: [],
    },
    {
        nums: [0, 1, 2, 3, 4, 5],
        expected: [],
    },
    {
        nums: [1, 1, 2, 2, -1, -1, -2, -2],
        expected: [
            [-1, -1, 2],
            [-2, 1, 1],
        ],
    },
    {
        nums: [-1, 0, 1, 0],
        expected: [[-1, 0, 1]],
    },
];

threeSumScenarios.forEach((s) => {
    test(`threeSum returns ${s.expected} for ${s.nums}`, () => {
        expect(threeSum(s.nums)).toEqual(
            s.expected
        );
    });
});
