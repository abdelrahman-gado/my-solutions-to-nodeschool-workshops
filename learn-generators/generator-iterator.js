function* factorial(n) {
  let i = 1;
  let res = 1;
  while (i <= n) {
    res *= i;
    yield res;
    i++;
  }
}

for (var n of factorial(2)) {
  console.log(n);
}