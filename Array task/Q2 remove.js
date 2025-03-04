console.log("Q 2. remove repateElement in array");
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.log(arr)

function removeRepateElement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeRepateElement(arr));