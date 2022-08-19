import { isHappy } from './happy-number';

const happyNumbersScenarios: {
    n: number;
    expected: boolean;
}[] = [
    { n: 19, expected: true },
    { n: 2, expected: false },
    { n: 3, expected: false },
];

happyNumbersScenarios.forEach((s) => {
    test(`isHappy returns ${s.expected} for ${s.n}`, () => {
        expect(isHappy(s.n)).toBe(
            s.expected
        );
    });
});
