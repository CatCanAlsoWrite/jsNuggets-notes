//1.basic function
function sum(a, b) {
  console.log(a + b)
}
sum(1, 2) //3

//2.add a currying function
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b)
    }
  }
}

let curriedSum = curry(sum)
curriedSum(1)(2) //3
sum(1, 2) //3 `also works`
