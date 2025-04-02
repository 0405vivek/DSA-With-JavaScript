class StackUsingQueues {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
        if (this.q1.length === 0) {
            throw new Error("Stack is empty");
        }

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        let poppedElement = this.q1.shift();
        [this.q1, this.q2] = [this.q2, this.q1];

        return poppedElement;
    }

    top() {
        if (this.q1.length === 0) {
            throw new Error("Stack is empty");
        }

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        let topElement = this.q1[0];
        this.q2.push(this.q1.shift());
        [this.q1, this.q2] = [this.q2, this.q1];

        return topElement;
    }

    isEmpty() {
        return this.q1.length === 0;
    }
    display(){
        console.log(this.q1)
    }
}

// Example usage
const stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.display()
console.log("REMOVE ELE = >",stack.pop());  
stack.display()
console.log("REMOVE ELE = >",stack.pop());  
stack.display()
console.log("TOP  ELE   = >",stack.top());  
console.log(stack.isEmpty());  

stack.display()
