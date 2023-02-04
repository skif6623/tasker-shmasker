// abstract class House {
// 	protected door: "open" | "close" = "close";
// 	private tenants: Person[] = [];

// 	constructor(protected key: Key) {}

// 	comeIn(person: Person) {
// 		if (this.door === "close") {
// 			console.log("Двері закриті");
// 		}
// 		this.tenants.push(person);
// 		console.log("Увійшов в дім");
// 	}
// 	abstract openDoor(key: Key): void;
// }

// class MyHouse extends House {
// 	openDoor(key: Key): void {
// 		if (key !== this.key) {
// 			console.log("ключ не підходить");
// 		}
// 		this.door = "open";
// 	}
// }

// class Key {
// 	private signature: number;
// 	showSign: () => number;

// 	constructor() {
// 		this.signature = Math.random();
// 		this.showSign = this.getSignature;
// 	}

// 	getSignature() {
// 		return this.signature;
// 	}
// }

// class Person {
// 	constructor(private key: Key) {}

// 	getKey(): Key {
// 		return this.key;
// 	}
// }

// const key = new Key();
// console.log(key);

// abstract class Guy {
// 	public name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// class Good extends Guy {
// 	advice() {
// 		console.log("Good");
// 	}
// }

// class Bad extends Guy {
// 	insult() {
// 		console.log("Bad");
// 	}
// }

// const goodGuy = new Good("roman");
// const badGuy = new Bad("emi");

// function guys(user: Guy) {
// 	if (user instanceof Good) {
// 		user.advice();
// 	}
// 	if (user instanceof Bad) {
// 		user.insult();
// 	}
// }

// guys(badGuy);

// function getPromise(): Promise<(string | number)[]> {
// 	return new Promise(resolve => {
// 		resolve(["Text", 50]);
// 	});
// }

// getPromise().then(data => {
// 	console.log(data);
// });

// type AllType = {
// 	name: string;
// 	position: number;
// 	color: string;
// 	weight: number;
// };

// function compare(top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position" | "weight">): AllType {
// 	return {
// 		name: top.name,
// 		color: top.color,
// 		position: bottom.position,
// 		weight: bottom.weight,
// 	};
// }

// compare({name: "Roman", color: "red"}, {position: 100, weight: 200});

// function merge<T extends object, U extends object>(objA: T, objB: U) {
// 	return Object.assign(objA, objB);
// }

// interface IObj {
// 	title: string;
// }

// class Component<T> {
// 	constructor(public props: T) {}
// }

// class Page extends Component<IObj> {
// 	pageInfo() {
// 		console.log(this.props.title);
// 	}
// }

// const page = new Page({title: "Roman"});
// page.pageInfo();
// console.log(page.props.title);

// function Logger(logString: string) {
// 	return function (constructor: Function) {
// 		console.log(logString);
// 		console.log(constructor);
// 	};
// }

// @Logger("LOGGING - CONTROLLER")
// class Controller {
// 	public id = 1;
// }

// const cont = new Controller();
// function Logger(a: string) {
// 	return function (constructor: Function) {
// 		console.log(a);
// 		console.log("Конструктор це клас з яким викликаємо дескриптор", constructor);
// 	};
// }

// function OpenWindow(a: boolean) {
// 	return function (constructor: Function) {
// 		constructor.prototype.window = a;
// 	};
// }

// @Logger("Loading")
// @OpenWindow(true)
// class House {
// 	protected door: "close" | "open";
// 	window = false;

// 	constructor(door: "close" | "open") {
// 		this.door = door;
// 	}
// }

// const house = new House("open");
// console.log("Window is open:", house.window);

interface IDecoration {
	parent: string;
	template: string;
}

const config: IDecoration = {
	parent: "app",
	template: "H1",
};

function ControllerDecoration(config: IDecoration) {
	return function <T extends {new (...arg: any[]): {content: string}}>(originConstructor: T) {
		return class extends originConstructor {
			private element: HTMLElement;
			private parent: HTMLElement;

			constructor(...arg: any[]) {
				super(...arg);

				this.parent = document.getElementById(config.parent)!;
				this.element = document.createElement(config.template);

				this.element.innerHTML = this.content;

				this.parent.appendChild(this.element);
			}
		};
	};
}

@ControllerDecoration(config)
class Controller {
	constructor(public content: string) {}
}

const controller = new Controller("rere");
const controller2 = new Controller("куку");
const controller3 = new Controller("привіт");
