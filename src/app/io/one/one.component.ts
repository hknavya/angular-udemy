import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
	selector: "app-io-one",
	templateUrl: "./one.component.html",
	outputs: ["sidebarLists"]
})
export class OneComponent implements OnInit {
	constructor() {}
	public sidebarLists = new EventEmitter<string>();
	private show = false;

	showHide() {
		// this.show = !this.show;
		// this.sidebarLists.emit(this.show);
		this.sidebarLists.emit();
	}

	ngOnInit() {}
}
