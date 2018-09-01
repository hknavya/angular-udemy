import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "app-recipes-list",
	templateUrl: "./list.component.html"
})
export class RecipeListComponent implements OnInit {
	// @Output() recipeList = new EventEmitter<any>();

	recipes: Recipe[] = [];

	constructor(
		private recipeService: RecipeService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	// onClickRecipe(recipe) {
	// 	console.log(recipe, "recipeListComponent");
	// 	this.recipeList.emit(recipe);
	// }
	// onClickRecipe(e) {
	// 	console.log(e, 'ee');

	// }

	onNewRecipe() {
		this.router.navigate(["new"], { relativeTo: this.activatedRoute });
	}

	ngOnInit() {
		// this.recipes = this.recipeService.recipes;
		this.recipes = this.recipeService.getRecipes();
	}
}
