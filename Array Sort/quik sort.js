let array = [1, 5, 3, 7, 2, 8, 4, 6, 9, 0];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arrayay.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];

}
console.log(quickSort(array));
