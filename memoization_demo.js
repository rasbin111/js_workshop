// code and idea from webdevsimplified
// youtube link: https://youtu.be/WbwP4w6TpCk?si=fiZNy0eV8-CC2ebt

function fibonacci(n){
	if (n<=2){
		return 1;
	}
	else{
		return fibonacci(n-1) + fibonacci(n-2);
	}
}

/*
console.log(fibonacci(10));
console.log(fibonacci(40)); // takes longer time to calculate
console.log(fibonacci(41)); // almost takes double the time we need to calculate for 40
*/

/* Memoization - If some task is being repeated again and again, use the previous
 * calculated value instead of doing the calculation again. It's like caching. */

function fibonacci_with_memoization(n, previousValues=[]){
	if (previousValues[n] != null){
		return previousValues[n];
	}
	let result;
	if (n<=2){
		result = 1;
	}

	else{
		result = fibonacci_with_memoization(n-1, previousValues) + fibonacci_with_memoization(n-2, previousValues);
	}
	previousValues[n] = result;
	return result;
}

/* calculations happens instantly because of memoization */ 
console.log(fibonacci_with_memoization(10));
console.log(fibonacci_with_memoization(40));
console.log(fibonacci_with_memoization(41));
