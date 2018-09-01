import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class CountService {
	public ActiveToInactiveCounter = 0;
	public InactiveToActiveCounter = 0;

	constructor() {}

	countInactiveToActive() {
		this.ActiveToInactiveCounter++;
		console.log("Inactive to Active : " + this.ActiveToInactiveCounter);
	}

	countActiveToInactive() {
		this.InactiveToActiveCounter++;
		console.log("Active to Inactive : " + this.InactiveToActiveCounter);
	}
}
