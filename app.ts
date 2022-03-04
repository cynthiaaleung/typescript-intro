function add(n1: number, n2: number) {
  return n1 + n2;
}

// return type is void, means function does not return anything, don't have to explicitly assign void
function printResult(num: number): void {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// function types: combineValues takes in a function with 2 parameters, each being a number, returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});