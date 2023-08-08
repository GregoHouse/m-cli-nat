export class Node {
	constructor(content) {
		this.next = null;
		this.content = content;
	}
}

export class List {
	constructor(nodes = []) {
		this.lastNode = null;
		this.head = null;
		nodes.forEach(content => {
			this.appendLast(content);
		});
	}

	/**
	 *  Checks if the head exists. If the head does not exist, it creates the head.
	 *  Otherwise, it executes the specified callback.
	 * @param {T} content
	 * @param {(node:Node)=>void} cb
	 */
	checkHead(content, cb) {
		const newNode = new Node(content);
		if (!this.head) {
			this.head = newNode;
			this.lastNode = this.head;
		} else {
			cb(newNode);
		}
	}

	appendLast(content) {
		this.checkHead(content, node => {
			this.lastNode.next = node;
			this.lastNode = node;
		});
	}

	appendFirst(content) {
		this.checkHead(content, node => {
			node.next = this.head;
			this.head = node;
		});
	}

	/**
	 * @param {number} index
	 * @returns {Node | null}
	 */
	getNode(index) {
		let i = 0;
		let currentNode = this.head;
		while (currentNode) {
			if (index === i) break;
			i++;
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	toArray() {
		const nodes = [];
		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode.content);
			currentNode = currentNode.next;
		}
		return nodes;
	}
}
