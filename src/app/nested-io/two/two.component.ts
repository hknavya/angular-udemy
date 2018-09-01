import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-nested-io-two",
	templateUrl: "./two.component.html"
})
export class NestedIoTwoComponent implements OnInit {
	constructor() {}
	public sidebar;

	@Input()
	set sidebarContent(message: boolean) {
		this.sidebar = message;
	}
	get sidebarContent() {
		return this.sidebar;
	}

	// showInnerSidebar(){
	// 	set sidebarContent(message: boolean) {
	// 		this.sidebar = message;
	// 	}
	// 	get sidebarContent() {
	// 		return this.sidebar;
	// 	}
	// }

	ngOnInit() {}
}
