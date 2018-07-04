// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let totalSum = A.length * (A.length + 1) / 2;
    arraySum = A.reduce((total, num) => {
        return total + num;
    });

    let count = 0;
    let set = new Set();
    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        count = count + element
        if (!set.has(element)) {
            set.add(element);
        } else {
            return 0;
        }
    }

    return totalSum === arraySum ? 1 : 0;
}

console.log(solution([3, 2, 1]));