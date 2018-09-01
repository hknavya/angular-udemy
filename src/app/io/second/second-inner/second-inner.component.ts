import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-second-inner",
	templateUrl: "./second-inner.component.html"
})
export class SecondInnerComponent implements OnInit {
	constructor() {}

	// public secondInnerSidebarBlock;
	// @Input()
	// set secondInnerSidebarBlock(message: boolean) {
	// 	this._secondInnerBlock = message;
	// }
	// get secondInnerSidebarBlock() {
	// 	return this._secondInnerBlock;
	// }

	ngOnInit() {}
}
