import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-io-second",
	templateUrl: "./second.component.html"
})
export class SecondComponent implements OnInit {
	constructor() {}
	private sidebarBlockContent;
	@Input()
	set sidebarBlock(message: boolean) {
		this.sidebarBlockContent = message;
	}
	get sidebarBlock() {
		return this.sidebarBlockContent;
	}

	// private _secondInnerSidebarBlockContent;
	// @Input()
	// set innerSidebarBlock(message: boolean) {
	// 	this._secondInnerSidebarBlockContent = message;
	// }
	// get innerSidebarBlock() {
	// 	return this._secondInnerSidebarBlockContent;
	// }

	ngOnInit() {}
}
