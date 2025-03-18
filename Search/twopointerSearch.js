
console.log("Two Pointer Search ..........................")

let aar = [10,20,22,23,25,30,35,38,40,50,55,56]

function twopointer(aar,target){

    let left =0;
    let right = aar.length - 1;

    let res =[];

    for(i=0;i<aar.length;i++){

        if ((aar[left] + aar[right]) == target){
            res.push([left ,right])
            right--;
            left++;
        }else if((aar[left] + aar[right]) > target){
            right--;
        }else{
            left++;
        }
            
    }
    return res;
}

console.log(twopointer(aar,(30)));
