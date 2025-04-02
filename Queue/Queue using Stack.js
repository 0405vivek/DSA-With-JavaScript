

class queue{
    constructor(){
        this.s1 =  []
        this.s2 =  []
    }

    Insart(val){
        this.s1.push(val)
    }

    removeEle(){

        if (this.s1.length === 0) {
            throw new Error("Stack is empty");
        }

        while (this.s1.length > 0){
            this.s2.push(this.s1.pop());
        }


        let poppedElement = this.s2.pop();
        console.log("POP ELEMENT = >",poppedElement)

         while (this.s2.length > 0){
            this.s1.push(this.s2.pop());
        }
        
    }

    top(){
        if (this.s1.length === 0) {
            throw new Error("Stack is empty");
        }

        while (this.s1.length > 0){
            this.s2.push(this.s1.pop());
        }


        let TOP = this.s2[this.s2.length - 1];
        console.log("TOP ELEMENT = >",TOP)

         while (this.s2.length > 0){
            this.s1.push(this.s2.pop());
        }
    }


    display(){
        console.log(this.s1)
    }
}

let q = new queue()

q.Insart(100)
q.Insart(200)
q.Insart(300)
q.Insart(400)
q.Insart(500)

q.display()

q.removeEle()
q.removeEle()
q.removeEle()
// console.log("pop " , q.poppedElement)
q.display()

q.top()
q.display()