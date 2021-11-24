class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
    this.length++

    return this
  }

  pop() {
    if (!this.head) return null

    let poppedNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.previous
      this.tail.next = null
      poppedNode.previous = null
    }

    this.length--

    return poppedNode
  }

  shift() {
    if (this.length === 0) return null

    let oldHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.previous = null
      oldHead.next = null
    }

    this.length--

    return oldHead
  }

  unshift(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    if (index <= this.length / 2) {
      let count = 0
      let current = this.head

      while (count != index) {
        current = current.next
        count++
      }
    } else {
      let count = this.length - 1
      let current = this.tail

      while (count !== index) {
        current = current.previous
        count--
      }
    }

    return current
  }

  set(index, value) {
    let foundNode = this.get(index)

    if (foundNode !== null) {
      foundNode.value = value

      return true
    }

    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false

    if (index === 0) return !!this.unshift(value)

    if (index === this.length) return !!this.push(value)

    let newNode = new Node(value)
    let previousNode = this.get(index - 1)
    let nextNode = previousNode.next

    previousNode.next = newNode
    newNode.previous = previousNode
    nextNode.next = newNode

    this.length++

    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return false

    if (index === 0) return this.shift()

    if (index === this.length - 1) return this.pop()

    let removeNode = this.get(index)

    let previousNode = removeNode.previous
    let nextNode = removeNode.next

    previousNode.next = nextNode
    nextNode.previous = previousNode

    removeNode.next = null
    removeNode.previous = null

    this.length--

    return removeNode
  }
}
