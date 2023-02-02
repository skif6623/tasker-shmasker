abstract class House {
	protected door: "open" | "close" = "close";
	protected key: Key;
	private tenants: Person[] = [];

	constructor(key: Key) {
		this.key = key;
	}

	comeIn(person: Person) {
		if (this.door === "close") {
			console.log("Двері закриті");
		}
		if (this.door === "open") {
			this.tenants.push(person);
			console.log("Увійшов в дім");
		}
	}
	abstract openDoor(key: Key): void;
}

class MyHouse extends House {
	openDoor(key: Key): void {
		if (key === this.key) {
			this.door = "open";
		}
	}
}

class Key {
	private signature: number;

	constructor() {
		this.signature = Math.random();
	}

	getSignature() {
		return this.signature;
	}
}

class Person {
	key: Key;

	constructor(key: Key) {
		this.key = key;
	}

	getKey(): Key {
		return this.key;
	}
}

const key = new Key();
console.log(key);
const myHouse = new MyHouse(key);
console.log(myHouse);
const person = new Person(key);
myHouse.openDoor(person.getKey());
myHouse.comeIn(person);
