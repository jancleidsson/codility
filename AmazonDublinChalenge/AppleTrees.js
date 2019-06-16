function solution(A, K, L) {
    if (K + L <= A.length) {
        return bestSequencieSums(A, K, L);
    }
    return -1;
}

function sumSubSequence(A) {
    return A.reduce((a, b) => a + b, 0);
}

function bestSequencieSums(A, K, L) {
    lastBothSum = 0;
    for (let index = 0; index <= A.length - K; index++) {
        kSubSequence = A.slice(index, index + K);
        kRestSequence = A.slice();
        kRestSequence.splice(index, K);
        kSequenceSum = sumSubSequence(A.slice(index, index + K));
        currentBothSum = sumSubSequence(A.slice(index, index + K)) + maxSumInSequence(kRestSequence, L);
        if (lastBothSum < currentBothSum) {
            lastBothSum = currentBothSum;
        }
        // console.log("K sub sequence " + kSubSequence);
        // console.log("K rest sequence: " + kRestSequence);
        // console.log("K sequence sum: " + kSequenceSum);
        // console.log("Max sum in k rest sequence: " + maxSumInSequence(kRestSequence, L));
    }
    return lastBothSum;
}

function maxSumInSequence(A, K) {
    lastMaxSumInSequence = 0;
    for (let index = 0; index <= A.length - K; index++) {
        currentMaxSumInSequence = sumSubSequence(A.slice(index, index + K));
        if (lastMaxSumInSequence < currentMaxSumInSequence) {
            lastMaxSumInSequence = currentMaxSumInSequence;
        }
    }
    return lastMaxSumInSequence;
}

A = [6, 1, 4, 6, 3, 2, 7, 4];
B = 3;
C = 2;

D = [10, 19, 15]
F = 2
G = 3

console.log(solution(A, B, C) === 24);
console.log(solution(D, F, G) === -1);