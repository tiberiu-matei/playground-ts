export function isPalindrome(
    x: number
): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    let reverseNumber = 0;

    while (x > reverseNumber) {
        reverseNumber =
            reverseNumber * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return (
        x === reverseNumber ||
        x === Math.floor(reverseNumber / 10)
    );
}

export function isPalindromeString(
    x: number
): boolean {
    if (x < 0) {
        return false;
    }

    if (
        x
            .toString()
            .split('')
            .reverse()
            .join('') === x.toString()
    ) {
        return true;
    }

    return false;
}
