console.log(" 1. WAP for array data sorting descending order using selection sort.")

let arr = [5, 3, 8, 4, 2, 9 ,11 ,1 ,6 ,20];

function descending(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] < arr[j]) {
            let k;
            k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
            }
        }
    }
}
console.log("Before sorting:", arr);
descending(arr);
console.log("After sorting:",arr);


// output:
// Before sorting: [ 5, 3, 8, 4, 2, 9, 11, 1, 6, 20 ]
// After sorting: [ 20, 11, 9, 8, 6, 5, 4, 3, 2, 1 ]

console.log("******************************************************")

console.log(" 2. WAP for array data sorting ascending order using Merge sort..");

function mergeSort(arr) {
    // code here
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));

    
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

// console.log("Before sorting:", arr);
console.log("After sorting:", mergeSort(arr));

// output:
// Before sorting: [ 5, 3, 8, 4, 2, 9, 11, 1, 6, 20 ]
// After sorting: [ 1, 2, 3, 4, 5, 6, 8, 9, 11, 20 ]

console.log("******************************************************")

console.log(" 3. WAP for 2-D array print and also print it's square array.");

let arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


for(let a =0 ; a<arr2D.length;a++){
    let srt=""
    for( let b=0;b<arr2D[a].length;b++){
        
        srt= srt+arr2D[a][b]+" "
    }
    console.log(srt)
}



function squareArr(arr2D) {

            
    console.log("Square of array: ")
    for(let a =0 ; a<arr2D.length;a++){
        let srt=""
        for( let b=0;b<arr2D[a].length;b++){         
             srt= srt+arr2D[a][b]*arr2D[a][b] +" "
        }
        console.log(srt)

    }
}
squareArr(arr2D);

// output:
// 1 2 3
// 4 5 6
// 7 8 9
// Square of array:
// 1 4 9
// 16 25 36
// 49 64 81



console.log("******************************************************")

console.log(" 4. WAP for array operations (like push and pop, slice) without its method")

console.log(arr);

function POP(arr){
    arr.length = arr.length-1;
}

POP(arr);
console.log("POP",arr);


function PUSH(arr,value){
    arr[arr.length]=value;
    return arr;
}
PUSH(arr,10);
console.log("PUSH",arr);

function SLICE(arr,start=0,end=arr.length){
    
    let newArr = [];
    for(let i=start;i<end;i++){
        newArr[i-start]=arr[i];
        }
        return newArr;
    }
    console.log("SLICE",SLICE(arr));
    console.log("SLICE",SLICE(arr,0,3));
    console.log("SLICE",SLICE(arr,1));

// output:
// 4. WAP for array operations (like push and pop, slice) without its method
// [ 1, 2, 3, 4, 5 ]
// POP [ 1, 2, 3, 4 ]
// PUSH [ 1, 2, 3, 4, 10 ]
// SLICE [ 1, 2, 3, 4, 10 ]
// SLICE [ 1, 2, 3 ]
// SLICE [ 2, 3, 4, 10 ]