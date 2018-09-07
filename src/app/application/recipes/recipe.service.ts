import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import * as _ from "underscore";

@Injectable({
	providedIn: "root"
})
export class RecipeService {
	recipes: Recipe[] = [
		new Recipe(
			"Pasta",
			"Pasta is so hot and yummy!!",
			"http://cdn1.brandwiki.today/sites/48/2015/04/pasta-1200x720.jpg",
			[new Ingredient("Sandwich", 4), new Ingredient("Buns", 10)]
		),
		new Recipe(
			"Donuts",
			"Donuts is a box of happiness!!",
			"http://www.trbimg.com/img-5a4ffb42/turbine/sns-dailymeal-1865506-hero-donuts-edit-20180105/1600/1600x900",
			[new Ingredient("Toast", 7), new Ingredient("Rusk", 15)]
		)
	];

	constructor(private shoppingService: ShoppingService) {}

	selectedRecipe = new EventEmitter<Recipe>();

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingLists(ingredients: Ingredient[]) {
		console.log(ingredients, "ingredients");
		this.shoppingService.addIngtredients(ingredients);
	}

	getRecipeById(id) {
		// let recipeList = this.recipes.slice();
		return this.recipes[id];
	}

	getRecipeByName(recipename) {
		let recipName = this.capitalizeFirstLetter(recipename);
		let singleRecipe = _.findWhere(this.recipes, { name: recipName });
		return singleRecipe;
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	getRecipe(id) {
		console.log(id, "idd");
		return this.recipes[id];
	}
}
