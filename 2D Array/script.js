let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arr)

for(let i=0;i<arr.length;i++){
    let srt=""
    for( let j=0;j<arr[i].length;j++){
        // console.log(arr[i][j])
        srt= srt+arr[i][j]+" "
    }
    console.log(srt)
}
console.log("transformed array");

for(let i=0;i<arr.length;i++){
    let srt=""
    for( let j=0;j<arr[i].length;j++){
        // console.log(arr[i][j])
        srt= srt+arr[j][i]+" "
    }
    console.log(srt)
}
