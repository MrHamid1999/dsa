export class LinkedListNode {
data : number ; 
next: LinkedListNode | null
constructor(data : number , next : LinkedListNode | null=null){
    this.data = data  
    this.next = next
} 
prepend(nodeData : number) : void{
    this.next = new LinkedListNode(this.data , this.next)
    this.data = nodeData

}

append(nodeData : number) : void {
    if (this.next === null) {
        this.next = new LinkedListNode(nodeData)
    }else {
        this.next.append(nodeData)
    }
}

search(data : number) : boolean {
    if (this.data === data) {
         return true
    }else if (this.next !== null) {
        return this.next.search(data)
    }else {
        return false
    }
}

delete() : void {
    if (this.next !== null) {
        this.data = this.next.data
        this.next = this.next.next
    }
}

forEach(func : (val : number) => void) : void{
    func(this.data)
    if (this.next !== null) {
        this.next.forEach(func)
    }

}
}


const firstNode = new LinkedListNode(10)
firstNode.prepend(12)
firstNode.append(15)
console.log(firstNode)
