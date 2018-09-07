import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { customValidator } from "./customValidator";

@Component({
	selector: "app-ang-forms-reactive",
	templateUrl: "./reactive.component.html",
	styleUrls: ["./reactive.component.css"]
})
export class ReactiveFormsComponent implements OnInit {
	constructor() {}

	public genders = ["Male", "Female"];
	reactiveForm: FormGroup;
	practiceForm: FormGroup;

	ngOnInit() {
		this.reactiveForm = new FormGroup({
			username: new FormControl(null, Validators.required),
			loginData: new FormGroup({
				email: new FormControl(null, [Validators.required, Validators.email]),
				password: new FormControl(null, Validators.required)
			}),
			gender: new FormControl("Male", Validators.required),
			hobbies: new FormArray([])
		});

		this.practiceForm = new FormGroup({
			projectName: new FormControl(null, [
				Validators.required,
				customValidator.invalidProjectName
			]),
			email: new FormControl(null, [Validators.required, Validators.email]),
			status: new FormControl("finished")
		});
	}

	onSubmit() {
		console.log(this.reactiveForm);
	}

	onAddHobby() {
		const control = new FormControl(null, Validators.required);
		(<FormArray>this.reactiveForm.get("hobbies")).push(control);
	}

	onPracticeFormSubmit() {
		console.log(this.practiceForm);
	}
}
