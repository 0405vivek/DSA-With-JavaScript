console.log("lower Bound ................................");

function lowerBound(arr, ele) {
    let low = 0, up = arr.length - 1; 

    while (low <= up) {
        let mid = Math.floor((low + up) / 2);

        if (arr[mid] >= ele) {
            up = mid - 1;  
        } else {
            low = mid + 1;
        }
    }
    return low;
}

let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6];
console.log(lowerBound(arr, 5));


console.log("Upper Bound............................")

function upparBound(arr, ele) {
    let low = 0, up = arr.length - 1; 

    while (low <= up) {
        let mid = Math.floor((low + up) / 2);

        if (arr[mid] > ele) {
            up = mid - 1;  
        } else {
            low = mid + 1;
        }
    }
    return up;
}
console.log(upparBound(arr, 5));

console.log("Number of occurrences in Log(N).................");

let l = lowerBound(arr,5)
let u = upparBound(arr,5)

function occurrences(l , u){
    console.log(u-l);
    
}

occurrences(l ,u )