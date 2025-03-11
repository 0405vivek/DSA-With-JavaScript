
// WAP for Circular Link list. (append, remove functionality)


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let crr = this.head;
        while (crr.next !== this.head) {
            crr = crr.next;
        }

        crr.next = newNode;
        newNode.next = this.head;
    }

    pop() {
        if (!this.head) return null;

        if (this.head.next === this.head) {
            let val = this.head.data;
            this.head = null;
            return val;
        }

        let crr = this.head;
        let prev = null;

        while (crr.next !== this.head) {
            prev = crr;
            crr = crr.next;
        }

        prev.next = this.head;
        return crr.data;
    }

    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let result = "";
        let crr = this.head;

        do {
            result += crr.data + " -> ";
            crr = crr.next;
        } while (crr !== this.head);

        console.log(result + "(back to head)");
    }
}

console.log("Q.4 WAP for Circular Link list. (append, remove functionality)");


let cll = new CircularLinkedList();
cll.push(10);
cll.push(20);
cll.push(30);
cll.push(40);

console.log("Circular Linked List:");
cll.display();

// output: 10 -> 20 -> 30 -> 40 -> (back to head)

console.log(("**********************************************************"));


console.log("Popped:", cll.pop());
cll.display();

// output: 10 -> 20 -> 30 -> (back to head)
