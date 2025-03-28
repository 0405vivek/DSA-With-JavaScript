
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

    Display(){
        console.log(this.data)
    }
}

let arr = new Stack()

arr.Push(100)
arr.Push(200)
arr.Push(300)
arr.Push(400)
arr.Display()

arr.Pop()
arr.Display()

console.log(arr.Peck())

console.log(arr.isEmty())