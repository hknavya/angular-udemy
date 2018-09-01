import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-inner-two",
	templateUrl: "./inner-two.component.html",
	outputs: ["innerSidebar"]
})
export class InnerTwoComponent implements OnInit {
	constructor() {}
	public sidebar;

	@Input()
	set innerSidebarContent(message: boolean) {
		this.sidebar = message;
	}
	get innerSidebarContent() {
		return this.sidebar;
	}

	// public innerSidebar = new EventEmitter<string>();

	ngOnInit() {
		// this.innerSidebar.emit();
	}
}
