import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	OnDestroy
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { NgForm } from "@angular/forms";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
	selector: "app-shopping-list-edit",
	templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit, OnDestroy {
	public ingredient: Ingredient;

	constructor(private shoppingService: ShoppingService) {}

	editingSubscription: Subscription;
	public editedIngredientIndex;
	public editedIngredient;
	public editIngredientMode = false;

	@ViewChild("ingForm") slNgForm;

	// @ViewChild("name") ingredientName: ElementRef;
	// @ViewChild("amount") ingredientAmount: ElementRef;

	// @Output() addItem = new EventEmitter<any>();

	addIngredient(ingForm) {
		console.log(ingForm.value.name, "ingForm");
		// let nameInput = this.ingredientName.nativeElement.value;
		// let amountInput = this.ingredientAmount.nativeElement.value;
		this.ingredient = new Ingredient(ingForm.value.name, ingForm.value.amount);
		// this.addItem.emit(this.ingredient);
		const newIngredient = new Ingredient(
			ingForm.value.name,
			ingForm.value.amount
		);
		if (this.editIngredientMode) {
			this.shoppingService.updateIngredient(
				this.editedIngredientIndex,
				newIngredient
			);
		} else {
			this.shoppingService.inputIngredient.emit(this.ingredient);
		}
		this.editIngredientMode = false;
		this.slNgForm.reset();
	}

	clearIngredient() {
		this.slNgForm.reset();
		this.editIngredientMode = false;
		// this.ingredientAmount.nativeElement.value = "";
		// // nameInput = "";
		// // amountInput = "";
	}

	deleteIngredient() {
		if (this.editIngredientMode) {
			this.shoppingService.onDeleteIngredient(this.editedIngredientIndex);
			this.slNgForm.reset();
			this.editIngredientMode = false;
		}
	}

	ngOnInit() {
		this.editingSubscription = this.shoppingService.startedEditing.subscribe(
			(index: number) => {
				this.editedIngredientIndex = index;
				this.editIngredientMode = true;
				this.editedIngredient = this.shoppingService.getIngredientDetail(index);
				this.slNgForm.setValue({
					name: this.editedIngredient.name,
					amount: this.editedIngredient.amount
				});
			}
		);
	}

	ngOnDestroy() {
		this.editingSubscription.unsubscribe();
	}
}
