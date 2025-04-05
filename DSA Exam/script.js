// Q.1 WAP to implement insert, View and delete operations in Array using JavaScript without any function
console.log("Q.1 WAP to implement insert, View and delete operations in Array using JavaScript without any function");


    let arr = [1, 2, 3 ]



    
    console.log("Push Method")
     function add (arr,n) {
       arr[arr.length] = n;
       return n;
     }
     add(arr,11)
     add(arr,15)
     console.log(arr)

    //  output = [1, 2, 3, 11, 15]
    
    
    console.log("pop method")
    function remove (){
        arr.length = arr.length - 1
    }
    remove(arr)
    console.log(arr)

    // output = [1, 2, 3, 11]

    console.log("Array elements:");

    function view (arr){
       
        for (let i = 0; i < arr.length; i++) {
            console.log("Index " + i + ": " + arr[i]);
        }
    }

    view(arr)
    // output
    // Index 0: 1
    // Index 2: 3
    // Index 1: 2
    // Index 3: 11

    

   

console.log("***********************************************************************************")

// Q.2 WAP to implement Quick sort using JavaScript with DSA.

console.log("Q.2 WAP to implement Quick sort using JavaScript with DSA.")
let array = [1, 5, 3, 7, 2, 8, 4, 6, 9, 0];

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
      right.push(array[i]);
    }
}
  return [...quickSort(left), pivot, ...quickSort(right)];
  
}
console.log(quickSort(array));

// let array = [1, 5, 3, 7, 2, 8, 4, 6, 9, 0];
// output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("***********************************************************************************")


// Q.3 WAP to count Even and Odd Values from 2D array using JavaScript.

console.log("Q.3 WAP to count Even and Odd Values from 2D array using JavaScript.");


let arr2D = [
    [2, 5, 8],
    [7, 6, 1],
    [4, 9, 3]
];

let evenCount = 0;
let oddCount = 0;

for(let i=0;i<arr2D.length;i++){
    let srt=""
    for( let j=0;j<arr2D[i].length;j++){
    
        srt= srt+arr2D[i][j]+" "
    }
    console.log(srt)
}


for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[i].length; j++) {
        let value = arr2D[i][j];
        if (value % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
}

console.log("Total Even Numbers: " + evenCount);
console.log("Total Odd Numbers: " + oddCount);

// output = 
// 2, 5, 8
// 7, 6, 1
// 4, 9, 3
// Total Even Numbers: 4
// Total Odd Numbers: 5



console.log("***********************************************************************************")

// Q.4 WAP to implement insert and remove element from Queue using JavaScript.

console.log("Q.4 WAP to implement insert and remove element from Queue using JavaScript.");

class Queue{
    constructor(){
        this.data = [];
    }

    enQueue(val){
        this.data[this.data.length] = val 
    }
    deQueue(){
        let de = this.data[0]

        for(let i=0 ; i< this.data.length ; i++){
            this.data[i] = this.data[i+1]
        }
        this.data.length--;
    }
    top(){
        return this.data[0]
    }
    isEmty(){
        return this.data.length == 0
    }
    

    display(){
        console.log(this.data);
    }
}

let Q = new Queue()

console.log("Insert Element...............................");

Q.enQueue(100)
Q.enQueue(200)
Q.enQueue(300)
Q.enQueue(400)
Q.display()

// output:[100,200,300,400]

console.log("Remove Element...............................");
Q.deQueue()
Q.display()

// output:[200,300,400]

console.log("Top Element == >",Q.top());
// output:200

console.log("Is Empty == >",Q.isEmty());
// output:false


console.log("***********************************************************************************")


// Q.5 WAP to implement Buuble sort using JavaScript with DSA.

let Array = [1,2,5,3,8,10,14,19,30,9,50]

console.log("Q.5 WAP to implement Buuble sort using JavaScript with DSA.")
for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array.length; j++) {
        if (Array[j] > Array[j + 1]) {
            let result = Array[j];
            Array[j] = Array[j + 1];
            Array[j + 1] = result;
        }
    }
}

console.log(Array);

// OUTPUT: [1, 2, 3, 5, 8, 9, 10, 14, 19, 30, 50]