import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
	selector: "app-io-first",
	templateUrl: "./first.component.html",
	outputs: ["toggleEvent", "firstButton"]
})
export class FirstComponent implements OnInit {
	constructor() {}

	public toggleEvent = new EventEmitter<string>();
	public firstButton = new EventEmitter<string>();

	toggle() {
		this.toggleEvent.emit();
	}

	innerButton() {
		this.firstButton.emit();
	}

	ngOnInit() {}
}
