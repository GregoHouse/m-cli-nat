import { List } from './core';

export class PaginationList {
	constructor(nodes) {
		this.index = 0;
		this.size = nodes.length;
		this.list = new List(nodes);
	}
	getNode() {
		return this.list.getNode(this.index);
	}
	setIndex(index) {
		if (index < 0 || index >= this.size) {
			throw new Error(
				`PaginatioList index must be between [0: ${this.size - 1}]`,
			);
		}
		this.index = index;
		return this.getNode();
	}
	back() {
		if (this.index - 1 >= 0) this.index--;
		return this.getNode();
	}
	next() {
		if (this.index + 1 < this.size) this.index++;
		return this.getNode();
	}
}
