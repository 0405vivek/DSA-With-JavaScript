console.log("linerar Search...................")

arr = [10,15,9,8,12,30,65,1,9,58]

function linerarSearch(arr , ele){

    for(let i=0; i<arr.length; i++){

        if(arr[i] == ele){
            return i;
        }
    }
    return -1;

}

console.log(linerarSearch(arr,58))

console.log("***********************************************");
