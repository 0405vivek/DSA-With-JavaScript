let arr = [20,90,50,80,60,10,30,70,40,100];
let n = arr.length;
let i,j,temp;

function mrgSort(arr,n){
    for(i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
    return arr;
}

mrgSort(arr,n);
console.log(arr);


