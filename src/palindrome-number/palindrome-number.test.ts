import { isPalindrome } from './palindrome-number';

const palindromeNumberScenarios: {
    n: number;
    expected: boolean;
}[] = [
    { n: 121, expected: true },
    { n: -121, expected: false },
    { n: 10, expected: false },
    { n: 1661, expected: true },
    { n: 131000, expected: false },
    { n: 88888, expected: true },
];

palindromeNumberScenarios.forEach((s) => {
    test(`palindromeNumber returns ${s.expected} for ${s.n}`, () => {
        expect(isPalindrome(s.n)).toBe(
            s.expected
        );
    });
});
