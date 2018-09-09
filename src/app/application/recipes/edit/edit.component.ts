import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "../recipe.service";

@Component({
	selector: "app-edit",
	templateUrl: "./edit.component.html"
})
export class RecipesEditComponent implements OnInit {
	public id;
	public editMode = false;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private recipeService: RecipeService
	) {}

	recipeForm: FormGroup;

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.id = params["id"];
			console.log(params, "params");
			console.log(params["id"], this.id, "thisss");
			this.editMode = params["id"] != null;
			console.log(this.editMode, "editMode");
			this.initForm();
		});
	}

	private initForm() {
		let name = "";
		let description = "";
		let imagePath = "";
		let ingredients = new FormArray([]);

		if (this.editMode) {
			const recipe = this.recipeService.getRecipe(this.id);
			console.log(recipe, recipe.name);

			name = recipe.name;
			description = recipe.description;
			imagePath = recipe.imagePath;
			console.log(recipe.ingredients, recipe["ingredients"]);
			if (recipe.ingredients) {
				for (let ingredient of recipe.ingredients) {
					console.log(ingredient, "ing");
					ingredients.push(
						new FormGroup({
							ingredientName: new FormControl(
								ingredient.name,
								Validators.required
							),
							ingredientAmount: new FormControl(ingredient.amount, [
								Validators.required,
								Validators.pattern(/^[1-9]+[0-9]*$/)
							])
						})
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			name: new FormControl(name, Validators.required),
			description: new FormControl(description, Validators.required),
			imagePath: new FormControl(imagePath, Validators.required),
			ingredients: ingredients // 37th line
		});
	}

	onRecipeSubmit() {
		// console.log(this.recipeForm);
		if (this.editMode) {
			// const newRecipe = new Recipe()
			this.recipeService.updateRecipe(this.id, this.recipeForm.value);
			// console.log(this.id, JSON.stringify(this.recipeForm.value), "abc");
		} else {
			this.recipeService.addRecipe(this.recipeForm.value);
		}
		this.router.navigate(["../"], { relativeTo: this.activatedRoute });
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get("ingredients")).push(
			new FormGroup({
				ingredientName: new FormControl(null, Validators.required),
				ingredientAmount: new FormControl(null, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		);
	}

	onCancelRecipe() {
		this.router.navigate(["../"], { relativeTo: this.activatedRoute });
	}

	onDeleteIngredient(index) {
		(<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
	}
}
