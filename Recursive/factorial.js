console.log("factorial...................................");


function factorial(num){

    if(num<=0){
        return 0;
    }else if(num==1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

console.log(factorial(5))

console.log("Fibonacci Series.............................");

function fibonacci(n){

    if(n<=0){
        return [];
    }
    if(n===1){
        return 1;
    }
    if(n===2){
        return [0,1];

    }

    let Series = fibonacci(n-1);
    Series.push(Series[Series.length - 1] + Series[Series.length - 2])
    return Series;

}
console.log(fibonacci(10))
console.log("Binary Search..................")

function binarySearch(arr , target , left = 0 ,right =arr.length-1){
    if(left>right){
        return -1;
    }
     let mid= ((left+right)/2);
     if(arr[mid]==target){
        return mid;

     }
     if(arr[mid]>target){
        return binarySearch(arr,target,left,right-1);  
    }
    return binarySearch(arr,target,left+1,right);  
}
let array = [1,2,3,6,9,11,15,18,19]
let result= binarySearch(array, 19)

console.log(result)
