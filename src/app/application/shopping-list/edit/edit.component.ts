import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	Output,
	EventEmitter
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
	selector: "app-shopping-list-edit",
	templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit {
	public ingredient: Ingredient;

	constructor(private shoppingService: ShoppingService) {}

	@ViewChild("name") ingredientName: ElementRef;
	@ViewChild("amount") ingredientAmount: ElementRef;

	// @Output() addItem = new EventEmitter<any>();

	addIngredient() {
		let nameInput = this.ingredientName.nativeElement.value;
		let amountInput = this.ingredientAmount.nativeElement.value;
		this.ingredient = new Ingredient(nameInput, amountInput);
		// this.addItem.emit(this.ingredient);

		this.shoppingService.inputIngredient.emit(this.ingredient);
	}

	clearIngredient() {
		this.ingredientName.nativeElement.value = "";
		this.ingredientAmount.nativeElement.value = "";
		// nameInput = "";
		// amountInput = "";
	}

	ngOnInit() {}
}
