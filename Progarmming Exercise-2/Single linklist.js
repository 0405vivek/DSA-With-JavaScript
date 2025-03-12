
class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkList{
    constructor(){
        this.head = null;
    }

    push(data){
        let newnode = new node(data)
        if(!this.head){
            this.head = newnode;
            return;
        }
        let crr = this.head
        while(crr.next){
            crr = crr.next;
            
        }
        crr.next = newnode
    }

    // output:10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> null
    
    
    // 1. WAP for Reverse Link List

    reverse(){
        console.log("Q.1 WAP for Reverse Link List")
        
        let crr = this.head;
        let prev = null;
        let temp;
        
        while(crr != null){
            temp = crr.next ;
            crr.next = prev;
            prev = crr;
            crr = temp;
        }
        
        this.head = prev;
    }
    
    // output:70 -> 60 -> 50 -> 40 -> 30 -> 20 -> 10 -> null
    
    // WAP for Given Link List is Palindrome or not

    paliindrom(){
        console.log("Q.2 WAP for Given Link List is Palindrome or not")
        let temp = this.head;
        let arr = [];
        while(temp){
            arr.push(temp.data);
            temp = temp.next;
        }
        let start = 0;
        let end = arr.length-1;
        while(start<end){
            if(arr[start] != arr[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    // output:Palindrome : true


    // WAP for Removing Node Element at any Position in given Link list.


    splice(index, deleteCount, ...data) {
        console.log("Q.3 Inserting data at any position in given linked list.");

        if (index < 0) {
            console.error("Invalid index.");
            return;
        }

        let newNodes = data.map(d => new Node(d));

        if (!this.head) {
            if (newNodes.length > 0 && index === 0) {
                this.head = newNodes[0];
                for (let i = 0; i < newNodes.length - 1; i++) {
                    newNodes[i].next = newNodes[i + 1];
                }
            }
            return;
        }

        if (index === 0) {
            let lastNewNode = newNodes.length > 0 ? newNodes[newNodes.length - 1] : null;
            if (lastNewNode) {
                lastNewNode.next = this.head;
                this.head = newNodes[0];
            }
            return;
        }

        let current = this.head;
        let prev = null;
        let count = 0;

        while (current && count < index) {
            prev = current;
            current = current.next;
            count++;
        }

        if (!prev) {
            console.error("Index out of bounds.");
            return;
        }

        let next = current;
        for (let i = 0; i < deleteCount && next; i++) {
            next = next.next;
        }

        if (newNodes.length > 0) {
            prev.next = newNodes[0];
            newNodes[newNodes.length - 1].next = next;
        } else {
            prev.next = next;
        }
    }

    // list.splice(1,3)
    // output: 70 -> 30 -> 20 -> 10 -> null


    display(){
        let crr = this.head;
        let result = [];

        while(crr){
            result = result + crr.data + " -> "
            crr = crr.next
        }
        console.log(result + "null"); 
    }
}

console.log("Linklist Project");


let list = new linkList()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
list.push(60)
list.push(70)
list.display()

// output: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> null

console.log("********************************************************");



list.reverse()
list.display()
// output: 70 -> 60 -> 50 -> 40 -> 30 -> 20 -> 10 -> null

console.log("********************************************************");

console.log(list.paliindrom());
 
// output: false

console.log("********************************************************");

list.splice(1,3)
list.display()
// output: 70 -> 30 -> 10 -> null
console.log("********************************************************");






