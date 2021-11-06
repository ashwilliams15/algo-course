// write a function that sums all of the numbers between 1 and n (including n)

function sum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i
  }
  console.log(result)
}


sum(7);
