import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
	selector: "app-ang-forms-tdd",
	templateUrl: "./tdd.component.html"
})
export class AngularFormsTddComponent implements OnInit {
	public defaultQuestion = "teacher";
	public genders = ["Male", "Female"];

	constructor() {}

	ngOnInit() {
		console.log(this.genders[0]);
	}

	@ViewChild("myForm") signupForm;
	// onSubmit(myForm: ElementRef) {
	// 	console.log(this.signup, "fdg");
	// }

	suggestedName() {
		const availName = "superuser";
		this.signupForm.setValue({
			name: availName,
			email: "",
			question: "pet",
			gender: "Male"
		});
		// this.signup.form.patchValue({
		// 	name: availName
		// });
	}

	// As we used above
	// 'setValue' is used to reset whole form
	// 'patchValue' is used to overight part of the form - as you see above updating just 'name' remaining will be as it is

	public userData = false;
	public userDetail = {
		name: "",
		email: "",
		question: "",
		gender: ""
	};

	onSubmit(myForm: ElementRef) {
		this.userData = true;
		this.userDetail.name = this.signupForm.value.name;
		this.userDetail.email = this.signupForm.value.email;
		this.userDetail.question = this.signupForm.value.question;
		this.userDetail.gender = this.signupForm.value.gender;

		// this.signup.reset() // To reset the form
	}

	public selectedOption = "advanced";
	@ViewChild("practiseForm") secondSignupForm;

	public secondUserData = {
		email: "",
		subscription: "",
		password: ""
	};

	onFormSubmit(practiceForm) {
		console.log(practiceForm);
		// using @ViewChild
		this.secondUserData.email = this.secondSignupForm.value.email;
		this.secondUserData.subscription = this.secondSignupForm.value.subscription;
		this.secondUserData.password = this.secondSignupForm.value.password;
		// // without using @ViewChild
		// this.secondUserData.email = practiceForm.value.email;
		// this.secondUserData.subscription = practiceForm.value.subscription;
		// this.secondUserData.password = practiceForm.value.password;
	}
}
