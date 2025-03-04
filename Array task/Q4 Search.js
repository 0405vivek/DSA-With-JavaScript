console.log("Q 4. count search element (linear search)");


let arr = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10];
let searchElement = +prompt("Enter the element to search");
let count = 0;

function CountSearch(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      count++;
    }
  }
  return count;
}

CountSearch(arr, searchElement);
console.log(count);
