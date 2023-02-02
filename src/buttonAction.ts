class House {
	private tenants: string[] = [];

	constructor(private readonly street: string, public readonly type: string) {}

	public showAddress(this: House): void {
		console.log("Address", this.street);
	}

	public showType(this: House): void {
		console.log("Type", this.type);
	}

	public addTenant(tenant: string): void {
		this.tenants.push(tenant);
	}

	public showTenants(): void {
		console.log(this.tenants);
	}
}

const house = new House("A", "Wood");
console.log(house);

class StoneHouse extends House {
	private host: string;
	constructor(street: string, host: string) {
		super(street, "stone");

		this.host = host;
	}

	public showTenants(): void {
		console.log("General: ", this.host);

		super.showTenants();
	}

	public showAddress(): void {
		// console.log("Stone House Address", this.street);
	}
}

const stoneHouse = new StoneHouse("Kuku", "Roman");
console.log(stoneHouse);
