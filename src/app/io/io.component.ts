import { Component, OnInit } from "@angular/core";
import { SecondComponent } from "./second/second.component";

@Component({
	selector: "app-io",
	templateUrl: "./io.component.html"
})
export class IoComponent implements OnInit {
	constructor() {}
	// public dummyContent;
	public sidebar = false;
	public innerSidebar = false;

	showData() {
		console.log("am here");
		// this.dummyContent = !this.dummyContent;
		this.sidebar = !this.sidebar;
		// this.innerSidebarContent = !this.innerSidebarContent;
	}

	innerSidebarContent() {
		// this.innerSidebar = value;
		this.innerSidebar = !this.innerSidebar;
	}
	// showData(value) {
	// 	this.sidebar = value;
	// }

	ngOnInit() {}
}
