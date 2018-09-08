import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-application-header",
	templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
	constructor() {}

	// @Output() selectedMenu = new EventEmitter<any>();
	// // @Output() showShoppingList = new EventEmitter<any>();

	// onSelectMenu(menu) {
	// 	this.selectedMenu.emit(menu);
	// }

	// onShoppingMenu() {
	// 	this.showShoppingList.emit();
	// }

	ngOnInit() {}
}
