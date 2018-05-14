// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    for (let index = 0; index < A.length; index++) {
        const element = A[index];
       
        if (A[index - 1] && element === A[index - 1]) {
            continue;
        }

        if (A[index - 2] && element === A[index - 2]) {
            continue; 
        }
    
        if (A[index + 1] && element === A[index + 1]) {
            continue; 
        }

        if (A[index + 2] && element === A[index + 2]) {
            continue; 
        }

        return element;
    }
}


[2, 2, 3, 3, 4]