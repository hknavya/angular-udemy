import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-io-two",
	templateUrl: "./two.component.html"
})
export class TwoComponent implements OnInit {
	constructor() {}

	// public sidebarLists = new EventEmitter<string>();

	private _innerSidebarBlock;
	@Input()
	set innerSidebarBlock(message: boolean) {
		this._innerSidebarBlock = message;
	}
	get innerSidebarBlock() {
		return this._innerSidebarBlock;
	}

	ngOnInit() {
		// setTimeout(
		// 	function() {
		// 		this.sidebarLists.emit(value);
		// 	}.bind(this),
		// 	10
		// );
	}
}
