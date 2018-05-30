class LinkedList {

	constructor() {
		this.head = new Node();
		this.tail = new Node();
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	push(data) {
		var node = new Node(data);
		node.prev = this.tail.prev;
		node.prev.next = node;
		node.next = this.tail;
		this.tail.prev = node;
	}

	pop() {
		var node = this.tail.prev;
		this.tail.prev = node.prev;
		node.prev.next = this.tail;
		return node.data;
	}

	shift() {
		var node = this.head.next;
		this.head.next = node.next;
		node.next.prev = this.head;
		return node.data;
	}

	unshift(data) {
		var node = new Node(data);
		node.next = this.head.next;
		node.next.prev = node;
		node.prev = this.head;
		this.head.next = node;
	}

	count() {
		var node = this.head;
		var counter = 0;
		while (node.next !== this.tail) {
			node = node.next;
			counter += 1;
		}
		return counter;
	}

	delete(data) {
		var node = this.head;
		while (node.next !== this.tail) {
			node = node.next;
			if (node.data === data) {
				node.prev.next = node.next;
				node.next.prev = node.prev;
			}
		}
	}

}

class Node {

	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}

}

export default LinkedList;

