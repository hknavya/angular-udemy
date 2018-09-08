import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "app-recipes-detail",
	templateUrl: "./detail.component.html"
})
export class DetailComponent implements OnInit {
	public recipeId;
	public recipe;
	public id;
	public editMode;

	constructor(
		private recipeService: RecipeService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	moveToShoppingLists() {
		this.recipeService.addIngredientsToShoppingLists(this.recipe.ingredients);
	}

	onEditRecipe() {
		this.router.navigate(["edit"], { relativeTo: this.activatedRoute });
		// this.activatedRoute.params.subscribe((params: Params) => {
		// 	console.log(params, "params");
		// 	this.id = params["id"];
		// 	console.log(this.id, "id");
		// 	this.editMode = params["id"] == "null";
		// 	console.log(this.editMode);
		// });
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.recipeId = +params["id"];
			this.recipe = this.recipeService.getRecipeById(this.recipeId);
			console.log(this.recipe, "this.recipe");
		});
	}
}
