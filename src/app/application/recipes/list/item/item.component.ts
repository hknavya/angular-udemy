import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-recipes-list-item",
	templateUrl: "./item.component.html"
})
export class RecipeListItemComponent implements OnInit {
	@Input() recipe: Recipe;
	@Input() id;
	// public clickRecipe = new EventEmitter<Recipe>();
	// @Output() selectedRecipe = new EventEmitter<recipe>();

	constructor(
		private recipeService: RecipeService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	// onClickRecipeItem(recipe) {
	// 	this.router.navigate([this.id], {relativeTo: this.activatedRoute});
	// }

	ngOnInit() {
		// console.log(this.recipe, "recipe");
	}
}
