// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let elem = 0;
	for (let i = 0; i < A.length; i++) {
		elem ^= A[i];
	}
	return elem;
}