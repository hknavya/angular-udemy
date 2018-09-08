import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-application",
	templateUrl: "./application.component.html"
})
export class ApplicationComponent implements OnInit {
	constructor() {}
	public loadedComponent = "recipe";

	selectedMenuContent(selectedMenu) {
		console.log("Recipe", selectedMenu);
		this.loadedComponent = selectedMenu;

		// if (selectedMenu == "recipe") {
		// 	this.recipeComponent = true;
		// 	this.shoppingListComponent = false;
		// } else {
		// 	this.recipeComponent = false;
		// 	this.shoppingListComponent = true;
		// }
		// this.recipeComponent = true;
		// this.shoppingListComponent = false;
	}

	// showShoppingListContent(e) {
	// 	console.log("Shopping List");
	// 	this.shoppingListComponent = true;
	// 	this.recipeComponent = false;
	// }

	ngOnInit() {}
}
