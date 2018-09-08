import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

@Injectable({
	providedIn: "root"
})
export class ShoppingService {
	ingredients: Ingredient[] = [
		new Ingredient("Apple", 5),
		new Ingredient("Orange", 10),
		new Ingredient("Milk", 12)
	];

	// Observables
	ingredientsChanged = new Subject<any>();
	startedEditing = new Subject<any>();
	deleteIngredient = new Subject<any>();

	inputIngredient = new EventEmitter<Ingredient>();
	// public ingredientsChanged;

	constructor() {}

	getIngredients() {
		return this.ingredients;
	}

	addItem(ingredient) {
		this.ingredients.push(ingredient);
	}

	addIngtredients(recipeIngredients: Ingredient[]) {
		this.ingredients.push(...recipeIngredients); // ... it means it converts array of elements to list of elements
	}

	getIngredientDetail(index) {
		// console.log(this.ingredients[index], "valuess");
		return this.ingredients[index];
	}

	updateIngredient(index, newIngredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients);
	}

	onDeleteIngredient(selectedIndex) {
		console.log(selectedIndex, "selectedIndex");
		this.ingredients.splice(selectedIndex, 1);
	}
}
