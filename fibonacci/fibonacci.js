//a(n+1)= a(n-1) + an b>=1

function fibonacciRecursivo(n) {
  if (n <= 1) return n;
  //fibonacci[n] = fibonacci[n - 2] + fibonacci[n - 1];
 

  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

console.log(fibonacciRecursivo(10)); // Resultado: 55
