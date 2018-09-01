import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
	selector: "app-shopping-list",
	templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[] = [];

	constructor(private shoppingService: ShoppingService) {}

	// onAddItem(item) {
	// 	this.ingredients.push(item);
	// 	// this.shoppingService.addItem().subscribe(())
	// }

	ngOnInit() {
		this.ingredients = this.shoppingService.getIngredients();
		this.shoppingService.inputIngredient.subscribe((ingredient: Ingredient) => {
			this.shoppingService.addItem(ingredient);
		});
	}
}
