import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-nested-io",
	templateUrl: "./nested-io.component.html"
})
export class NestedIoComponent implements OnInit {
	constructor() {}
	public sidebar;

	ioSidebar(value) {
		this.sidebar = value;
	}

	nestedIoSidebar(value) {
		this.sidebar = value;
	}

	ngOnInit() {}
}
