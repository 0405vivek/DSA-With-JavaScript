console.log("Q 1. find maximum number in array.");
let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];
let max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }

}

console.log("Maximum number in array is " + max);