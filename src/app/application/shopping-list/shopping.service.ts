import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
	providedIn: "root"
})
export class ShoppingService {
	ingredients: Ingredient[] = [
		new Ingredient("Apple", 5),
		new Ingredient("Orange", 10),
		new Ingredient("Milk", 12)
	];

	inputIngredient = new EventEmitter<Ingredient>();

	constructor() {}

	getIngredients() {
		return this.ingredients;
	}

	addItem(ingredient) {
		this.ingredients.push(ingredient);
	}

	addIngtredients(recipeIngredients: Ingredient[]) {
		this.ingredients.push(...recipeIngredients);  // ... it means it converts array of elements to list of elements
	}
}
