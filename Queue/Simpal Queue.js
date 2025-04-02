

class Queue{
    constructor(){
        this.data = []
    }

    //Insart

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

    isEmty(){
        return this.data.length == 0;
    }

    top(){
       return this.data[0]
    }

    length(){
        return this.data
    }

    display(){
        console.log(this.data);
        
    }

    

}

let Q = new Queue()

console.log("Insart.............................");

Q.enQueue(100)
Q.enQueue(200)
Q.enQueue(300)
Q.display()

console.log("Delete.............................");

Q.deQueue()
Q.display()

console.log("Is Emty = >", Q.isEmty())
console.log("Top Ele = >", Q.top())
console.log("Length  = >", Q.length())



