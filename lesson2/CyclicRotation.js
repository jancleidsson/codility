// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    if (K >= A.length) {
        K = Math.floor(K % A.length);
        if (K == 0) {
            return A;
        }
    }

    let result = [];
    let firstElementPosition = A.length - K;
    for (let index = firstElementPosition; index < A.length; index++) {
        result.push(A[index]);
    }

    for (let index = 0; index < A.length - K; index++) {
        result.push(A[index]);
    }

    return result;
}

A = [3, 8, -1000, 7, 6]
K = 100

console.log(solution(A, K));
