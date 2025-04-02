console.log("Q1. Circular Queue");


{

    class CircularQueue {
        constructor(size) {
          this.size = size;
          this.queue = new Array(size);
          this.front = -1;
          this.rear = -1;
        }
      
        isEmpty() {
          return this.front === -1;
        }
      
        isFull() {
          return (this.rear + 1) % this.size === this.front;
        }
      
        enqueue(element) {
          if (this.isFull()) {
            console.log("Queue is full!");
            return;
          }
          if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
          } else {
            this.rear = (this.rear + 1) % this.size;
          }
          this.queue[this.rear] = element;
        }
      
        dequeue() {
          if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
          }
          let dequeuedElement = this.queue[this.front];
          if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
          } else {
            this.front = (this.front + 1) % this.size;
          }
          console.log("remove element in queue is:" , dequeuedElement);
          return dequeuedElement;
        }
      
        peek() {
          if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
          }
          console.log("peak element is:" ,this.queue[this.front]);
          return this.queue[this.front];
        }
      
        display() {
          let i = this.front;
          let elements = [];
          while (i !== this.rear) {
            elements.push(this.queue[i]);
            i = (i + 1) % this.size;
          }
          elements.push(this.queue[this.rear]);
          console.log(elements);
        }
      }
      
      let cQueue = new CircularQueue(5);
      
      cQueue.enqueue(10);
      cQueue.enqueue(20);
      cQueue.enqueue(30);
      cQueue.enqueue(40);
      cQueue.enqueue(50);
      cQueue.enqueue(60);
      cQueue.display();
    
    
      cQueue.dequeue();
      cQueue.dequeue();
      cQueue.display();
    
      cQueue.peek();
      cQueue.display();
}


//   Output :-

// [ 10, 20, 30, 40, 50 ]
// remove element in queue : 10
// remove element in queue : 20
// [ 30, 40, 50 ]
// peak element is: 30
// [ 30, 40, 50 ]
   


// write a program Queue using two stacks.

console.log("Q2. Queue using two stacks.")

{
    class Queue{
        constructor(){
            this.s1 = []
            this.s2 = []
        }

        enQueue(val){
            this.s1.push(val)
        }

        deQueue(){
            if(this.s1.length === 0){
                console.log("Stack is Emty!!!!!!!")
            }

            while(this.s1.length > 0){
                this.s2.push(this.s1.pop())
            }

            let removeEle = this.s2.pop()
            console.log("Remove Element  = >", removeEle);
            
            while(this.s2.length > 0){
                this.s1.push(this.s2.pop())
            }
        } 

        topEle(){
            if(this.s1.length === 0){
                console.log("Stack is Emty!!!!!!!")
            }

            while(this.s1.length > 1){
                this.s2.push(this.s1.pop())
            }

            let TOPELE = this.s1[0]
            console.log("TOP ELEMENT  = >", TOPELE);
            

            while(this.s2.length > 0){
                this.s1.push(this.s2.pop())
            }
        }

        isEmty(){
            if(this.s1.length === 0){
                console.log("Stack is Emty!!!!!!!")
            }else{
                console.log("Stack is not Emty!!!!!!!")

            }
        }

        display(){
            console.log(this.s1);
            
        }
    }

    
    let Q = new Queue()
    Q.enQueue(100)
    Q.enQueue(200)
    Q.enQueue(300)
    Q.enQueue(400)
    Q.enQueue(500)
    Q.display()
    
    Q.deQueue()
    Q.deQueue()
    Q.display()
    
    Q.topEle()
    Q.display()

    Q.isEmty()


    // output
    // [100, 200, 300, 400, 500]
    //  Remove Element  = > 100
    //  Remove Element  = > 200
    //  (3) [300, 400, 500]
    //  TOP ELEMENT  = > 300
    //  (3) [300, 400, 500]
    //  Stack is not Emty!!!!!!!

}




// write a program check first string swap can make strings equal. (leetcode question no 1790)

{

    let areAlmostEqual = function(s1, s2) {
        if (s1 === s2){
            return true;
        } 
       let result = [];
    
       for (let i = 0; i < s1.length; i++) {
           if (s1[i] !== s2[i]){
               result.push(i);
           } 
            
           if (result.length > 2){
               return false;
           } 
       }
       return result.length === 2 
    };
    
    let s1 = "bank";
    let s2 = "kanb";
    
    console.log(areAlmostEqual(s1, s2))
    
    let v1 = "vivek"
    let v2 = "vivek"
    console.log(areAlmostEqual(v1, v2))

   

}









