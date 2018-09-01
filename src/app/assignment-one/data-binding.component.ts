import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-data-binding",
	templateUrl: "./data-binding.component.html"
})
export class DataBindingComponent implements OnInit {
	public evenNumbers: number[] = [];
	public oddNumbers: number[] = [];
	public showingWell;
	constructor() {}

	onStartingGame(firedNumber: number) {
		console.log(firedNumber, "intervalNumber");
		this.showingWell = true;
		if (firedNumber % 2 === 0) {
			this.evenNumbers.push(firedNumber);
		} else {
			this.oddNumbers.push(firedNumber);
		}
	}

	ngOnInit() {}
}
