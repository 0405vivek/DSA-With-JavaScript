class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }

}

class linkist{
    constructor(){
        this.head = null;
    }
   
    unshift(data){
        let newNode = new Node(data)

        if(this.head = null){
            this.head = newNode
            return;
        }

        newNode.next =this.head 
       this.head = newNode
    }

    

    display(){
        let crr =this.head
        let result = []

        while(crr){
            result = result + crr.data 
            crr =crr.next
        }
        console.log(result)
    }
}

let list = new linkist()
list.unshift(10)
list.display()