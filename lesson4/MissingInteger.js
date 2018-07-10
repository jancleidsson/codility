// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let permutationArray = new Set(A);
    for (let index = 1; index <= 1000000; index++) {
        if (!permutationArray.has(index)) {
            return index;
        }
    }
    return 1;
}

console.log(solution([ 1, 3 ]));