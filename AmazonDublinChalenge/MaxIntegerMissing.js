// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxValue = Math.max(...A);
    if (maxValue > 0) {
        for (let index = 1; index <= maxValue; index++) {
            if (!A.includes(index)) {
                return index;
            };
        }
        return ++maxValue;
    }
    return 1;
}

A = [1, 3, 6, 4, 1, 2];
B = [1, 2, 3];
C = [-1, -3];

console.log(solution(A) === 5);
console.log(solution(B) === 4);
console.log(solution(C) === 1);