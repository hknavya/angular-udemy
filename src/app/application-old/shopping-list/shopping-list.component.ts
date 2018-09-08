import { Component, OnInit, Input } from "@angular/core";
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

	onEditList(index) {
		this.shoppingService.startedEditing.next(index);
		// 'startedEditing' is the Observable here, defined in shopping.service
	}
}
