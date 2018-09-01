import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
	selector: "app-nested-io-one",
	templateUrl: "./one.component.html",
	outputs: ["ioToggle", "nestedIoToggleButton"]
})
export class NestedIoOneComponent implements OnInit {
	constructor() {}
	public sidebars;

	public ioToggle = new EventEmitter<string>();
	public nestedIoToggleButton = new EventEmitter<string>();

	toggle() {
		this.sidebars = !this.sidebars;
		console.log(this.sidebars);
		this.ioToggle.emit(this.sidebars);
	}

	innerOneToggleButtonMethod(value) {
		console.log(value, "in one");
		this.nestedIoToggleButton.emit(value);
	}

	ngOnInit() {}
}
