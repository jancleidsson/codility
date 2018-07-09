// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    let permutationArray = new Set();

    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        if (element <= X && !permutationArray.has(element)) {
            permutationArray.add(element);
            
            let countPerm = X * (X + 1) / 2;     
            let count = permutationArray.size * (permutationArray.size + 1) / 2;
            
            if (count === countPerm) {
                return index;
            }
        }
    }
    return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));