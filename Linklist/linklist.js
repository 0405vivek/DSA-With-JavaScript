class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkist{
    constructor(){
        this.head = null;
    }

    unshift(data){
        let newnode = new node(data);
        if(!this.head){
            this.head = newnode;
            return;  
        } 

        newnode.next = this.head;
        this.head = newnode;

    }
    

    push(data){
        let newnode = new node(data)
        if(!this.head){
            this.head = newnode;
            return;  
        } 
        let crr = this.head
        while(crr.next){
            crr =crr.next
        } 
        crr.next = newnode;
    }

    shift(){
        if(!this.head){
            return null;
        }
        let crr =this.head
        this.head = crr.next;
        return crr.data;
    }
    pop(){
        let crr = this.head;
        let prev;

        while(crr.next){
            prev = crr;
            crr = crr.next;
        }
       prev.next = null

    }
/*
 crr=10-> 
 20-> 30-> 40-> 50-> 60-> null

 temp 20-> 30-> 40-> 50-> 60-> null
       p

*/
    // Reverse a linked list
    reverseList(){
        let crr = this.head;
        let prev = null;
        let temp;

        while (crr != null) {
          temp = crr.next;
          crr.next =prev;
          prev = crr;
          crr = temp;
          
        }
        this.head = temp
    }

    splice(index ,deleteCount, ...data ){
        let newnode = new node(data);
        if(index < 0){
            return;
        }
        if(!this.head && value.length === 0){
            return;
        }
        let crr = this.head;
        let count = 0;
        let prev;

        while(crr && count <index ){
            prev = crr;
            crr = crr.next;
            count++;
        }

        for( let i = 0; i< deleteCount && crr ;i++){
            crr =crr.next;
        }

        let inserted = null;
        for(let i = 0; i<data.length && crr ;i++){
            let newnode = new node(data);
            newnode.next = crr;
            crr = newnode;
        }
        if(prev){
            prev.next = newnode;
        }
        else{
            this.head = newnode;
        }
        prev = newnode;
        inserted = newnode;
        

            return;
    }

    display(){
        let crr= this.head;
        let result = [];
        while(crr){
            result = result +crr.data + "-> " 
            crr = crr.next;   
        }
        console.log(result+"null");
    }

    












}

   
let list = new linkist();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);

list.display();

list.reverseList()
list.display();

// // list.shift();
// // list.display();

list.splice(1 ,3 , 40)
list.display();

// // list.pop()
// // list.display();

// // list.unshift(9)
// // list.display();