// Write a program to implement binary search to find the index of a target element in a sorted array. (3 marks)

console.log("binary search to find the index of a target element in a sorted array.");



function binary(arr,ele){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid =Math.floor((left + right)/2);
        
        if(arr[mid] == ele){
            return mid;
        }
        else if(arr[mid] < ele){
            left = mid + 1;
        }else {
            right = mid - 1;
        }        
    }
    return -1;

}
let arr = [1,2,3,4,5,6,6,6,6,6,6,11,13,15,19,22,25,29]
console.log(binary(arr,13)) /*output = 7*/
console.log(binary(arr,12)) /*output = -1*/

console.log("***********************************************************************");

// write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences. (4 marks)

console.log("lower and upper bound methods. also return the count of occurrences.");

function lowerBound(arr , target){
    let low = 0;
    let up = arr.length - 1;
    
    while(low <= up){
        let mid =Math.floor((low +up)/2)

        if( arr[mid] >= target){
            up = mid - 1; 
        }else{
            low = mid + 1; 
        }
        
    }
    return low;
    
}
function upperBound(arr , target){
    let low = 0;
    let up = arr.length - 1;
    
    while(low <= up){
        let mid =Math.floor((low +up)/2)
        
        if( arr[mid] > target){
            up = mid - 1; 
        }else{
            low = mid + 1; 
        }
        
    }
    return low;
    
}

data = [1,2,3,4,5,6,6,6,6,6,6,6,8,9,9]

let l = lowerBound(data,6)
console.log("lowerBound",lowerBound(data,6)); /*oupput 5*/

let u = upperBound(data,6)
console.log("upperBound",upperBound(data,6));/*oupput 12*/


function occurrence(low,up){
    
    console.log("Nmuber of Occurrencr", up-low);
    
}

occurrence(l,u) /*oupput 7*/

console.log("***********************************************************************");

// Write a program to find the pivot index where the rotation occurs in a rotated sorted array. (3 marks)


console.log("pivot index where the rotation occurs in a rotated sorted array.");

function findPivotIndex(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid < right && arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }
        
        if (mid > left && arr[mid] < arr[mid - 1]) {
            return mid;
        }

        if (arr[mid] >= arr[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0;
}

let rotatedArray = [4,5,6,7,8,9,0,1,2];

console.log(findPivotIndex(rotatedArray)); // Output: 6
