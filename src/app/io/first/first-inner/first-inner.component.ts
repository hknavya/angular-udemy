import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
	selector: "app-first-inner",
	templateUrl: "./first-inner.component.html",
	outputs: ["innerToggleButton"]
})
export class FirstInnerComponent implements OnInit {
	constructor() {}

	public innerToggleButton = new EventEmitter<string>();

	firstInnerToggle() {
		this.innerToggleButton.emit();
	}

	ngOnInit() {}
}
