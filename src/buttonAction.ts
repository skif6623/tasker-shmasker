abstract class Plane {
	protected isPilotInCabine = false;

	sitInCabine(): void {
		this.isPilotInCabine = true;
	}

	abstract showPilots(): void;

	abstract startEngine(): void;
}

class Maize extends Plane {
	showPilots(): void {
		console.log("Пілот на місці");
	}
	startEngine(): void {
		console.log("ta-ta-ta-ta");
	}
}

class Boieng extends Plane {
	showPilots(): void {
		console.log("Команда пілотів на місці");
	}
	startEngine(): void {
		console.log("HUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
	}
}

const maize = new Maize();
const boieng = new Boieng();

maize.sitInCabine();
maize.showPilots();
maize.startEngine();

boieng.sitInCabine();
boieng.showPilots();
boieng.startEngine();
