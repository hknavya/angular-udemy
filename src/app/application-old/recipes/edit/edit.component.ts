import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
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
		let desc = "";
		let imagePath = "";
		let ingredients = new FormArray([]);

		if (this.editMode) {
			const recipe = this.recipeService.getRecipe(this.id);
			console.log(recipe, recipe.name);

			name = recipe.name;
			desc = recipe.description;
			imagePath = recipe.imagePath;
			console.log(recipe.ingredients, recipe["ingredients"]);
			if (recipe.ingredients) {
				for (let ingr of recipe.ingredients) {
					console.log(ingr, "ing");
					ingredients.push(
						new FormGroup({
							ingrName: new FormControl(ingr.name),
							ingrAmount: new FormControl(ingr.amount)
						})
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			name: new FormControl(name),
			desc: new FormControl(desc),
			imagePath: new FormControl(imagePath),
			ingredients: ingredients // 37th line
		});
	}

	onRecipeSubmit() {
		console.log(this.recipeForm);
	}

	onAddIngredient() {
		this.recipeForm.get("ingredients").push(
			new FormGroup({
				ingrName: new FormControl(),
				ingrAmount: new FormControl()
			})
		);
	}
}
