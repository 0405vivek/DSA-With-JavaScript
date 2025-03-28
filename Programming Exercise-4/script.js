// Write a program for Stack Operation Program (Insert, Delete, isEmpty, TopElement, Length)

console.log("Q.1 Stack Operation Program.");


class Stack{
    constructor(){
        this.data=[]
    }

    Push(val){
        this.data[this.data.length]=val
    }

    Pop(){
       this.data[this.data.length = this.data.length - 1]
    }

    Peck(){
       return this.data[this.data.length-1]
    }

    isEmty(){
        return this.data.length == 0
    }
    Length(){
        return this.data.length
    }
    Display(){
        console.log(this.data)
    }
}

let arr = new Stack()

console.log("Insert");
arr.Push(100)
arr.Push(200)
arr.Push(300)
arr.Push(400)
arr.Push(500)
arr.Display()

//output [100, 200, 300, 400] 

console.log("Delete");
arr.Pop()
arr.Display()

// opuput [100, 200, 300]

console.log("Top Element");
console.log("Top Element =>",arr.Peck())



console.log("isEmty =>",arr.isEmty())

console.log("Length =>" , arr.Length())



/*
Output:-
Insert
 (4) [100, 200, 300, 400]
 Delete
 (3) [100, 200, 300]
 Top Element
 Top Element => 300
 isEmty => false
 Length => 3

*/

console.log("*****************************************");



// Write a program for Next Greater Element using Stack.

console.log("Q.2 Next Greater Element using Stack.");

{
    class Stack {
        constructor() {
            this.arr = [];
        }
        
        nGreater(arr) {
            let stack = [];
            let result = new Array(arr.length).fill(-1); 
            for (let i = 0; i < arr.length; i++) {
                while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                    stack.pop();
                }
                if (stack.length > 0) {
                    result[i] = stack[stack.length - 1];
                }
                stack.push(arr[i]);
            }
            
            this.arr = result; 
        }
    
        Display() {
            console.log(this.arr); 
        }
    }  
    let re = new Stack();
    let ar = [1, 6, 4, 3, 5, 9, 7];
    re.nGreater(ar);
    re.Display();
    //output: [-1, -1, 6, 4, 6, -1, 9]
    
}

console.log("*****************************************");
// Write a program for a reverse string using Stack. 

console.log("Q.3 reverse string using Stack.");
{
    class Stack {
        constructor() {
            this.arr = [];
        }

        reverseString(str) {
            for (let i = 0; i < str.length; i++) {
                this.arr.push(str[i]);
            }
            let result = "";
            while (this.arr.length > 0) {
                result += this.arr.pop();
            }
            this.arr = result;
        }

        Display() {
            console.log(this.arr);
        }
    }
    let re = new Stack();
    let str = "Hello World";
    re.reverseString(str);
    re.Display();
    // output: dlroW olleH
}
