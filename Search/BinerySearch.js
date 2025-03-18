console.log("Binery Search ...................");

let array = [10,20,30,40,50,60,70,80,90,100]

function BinerySearch(array,ele){
    
    let left = 0
    let right = array.length - 1;

    let mid = Math.floor((left + right)/2)

    while(left <= right ){

        if (array[mid] == ele){
            return mid;
        }else if(array[mid] < ele){
            right = mid + 1
        }else if(array[mid] >ele ){
            left = mid - 1
        }
    }
    return -1;

}

console.log(BinerySearch(array , (60)));

