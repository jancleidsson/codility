// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Detected time complexity:O(N) or O(N * log(N))

function solution(A) {
    let arrayAmmount = 0;
    for (let index = 0; index < A.length; index++) {
        arrayAmmount += A[index];
<<<<<<< HEAD
    }
    return ((A.length + 1) * ((A.length + 1) + 1) / 2) - arrayAmmount;
=======
     }
     return ((A.length + 1) * ((A.length + 1) + 1) / 2) - arrayAmmount;
>>>>>>> 6499fce098cf9a81ded12b0b7852faca58ab179c
 }