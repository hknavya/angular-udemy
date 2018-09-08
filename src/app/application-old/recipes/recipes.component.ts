import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "app-recipes",
	templateUrl: "./recipes.component.html"
})
export class RecipesComponent implements OnInit {
	constructor(
		private recipeService: RecipeService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	public recipeName;
	public recipe;
	public recipeId;

	// public selectedRecipe: Recipe;

	// onSelectedRecipe(recipe) {
	// 	console.log(this.selectedRecipe, recipe);
	// 	this.selectedRecipe = recipe;
	// }

	// onNewRecipe() {
	// 	this.router.navigate(["new"], { relativeTo: this.activatedRoute });
	// }

	ngOnInit() {
		// this.activatedRoute.queryParams.subscribe((params: Params) => {
		// 	if (params["recipe"]) {
		// 		this.recipeName = params["recipe"];
		// 	} else {
		// 		this.recipeName = "Pasta";
		// 	}
		// 	let recipes = this.recipeService.getRecipes();
		// 	this.recipeName = this.recipeService.capitalizeFirstLetter(
		// 		this.recipeName
		// 	);
		// 	for (let index in recipes) {
		// 		if (recipes[index].name == this.recipeName) {
		// 			this.recipeId = index;
		// 		}
		// 	}
		// 	console.log(this.recipeName, this.recipeId);
		// 	// this.recipeId = this.recipeService.getRecipeIdByName(this.recipeName);
		// 	this.router.navigate([this.recipeId], {
		// 		relativeTo: this.activatedRoute
		// 	});
		// 	// this.recipe = this.recipeService.getRecipeByName(this.recipeName);
		// });
		// this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
		// 	this.selectedRecipe = recipe;
		// });
	}
}
