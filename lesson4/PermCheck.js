// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let totalSum = A.length * (A.length + 1) / 2;
    arraySum = A.reduce((total, num) => {
        return total + num;
    });

    return totalSum === arraySum ? 1 : 0;
}

console.log(solution([3, 2, 1]));