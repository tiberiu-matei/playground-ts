export function isHappy(n: number): boolean {
    let currentNumber = n;
    const previousSums: number[] = [];
    let squaredDigitsSum = 0;
    do {
        squaredDigitsSum =
            getSumOfSquaredDigits(
                currentNumber
            );

        if (
            previousSums.includes(
                squaredDigitsSum
            )
        ) {
            return false;
        }

        currentNumber = squaredDigitsSum;
        previousSums.push(squaredDigitsSum);
    } while (squaredDigitsSum !== 1);

    return true;
}

function getSumOfSquaredDigits(
    n: number
): number {
    let sum = 0;
    for (let digit of n.toString()) {
        sum += Math.pow(+digit, 2);
    }

    return sum;
}
