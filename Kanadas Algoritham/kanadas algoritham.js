
let arr = [1,5,6,8,9,65,45,78,35,11,12,45,44]

function kanadas(num){
    let crrsum=0;
    let maxsum=0;

    for(i=0;i<num.length-1;i++){

        crrsum+=arr[i]

        if(crrsum > maxsum){
            maxsum=crrsum;
        }
        if(crrsum<0 && num.length > 1 ){
             crrsum= 0
        }
        if (num.length === 1) return num[0];

    }
    return maxsum;
}
console.log(kanadas(arr));
