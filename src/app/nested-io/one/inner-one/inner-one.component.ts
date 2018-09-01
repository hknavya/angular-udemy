import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
	selector: "app-nested-inner-one",
	templateUrl: "./inner-one.component.html",
	outputs: ["innerOneToggle"]
})
export class InnerOneComponent implements OnInit {
	constructor() {}
	public innerOneToggle = new EventEmitter<string>();
	public sidebar;

	innerOneToggleButton() {
		console.log("coming");
		this.sidebar = !this.sidebar;
		console.log(this.sidebar);
		this.innerOneToggle.emit(this.sidebar);
	}

	ngOnInit() {}
}
