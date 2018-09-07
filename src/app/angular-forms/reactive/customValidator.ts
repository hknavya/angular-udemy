import { FormControl } from "@angular/forms";

export class customValidator {
	static invalidProjectName(control: FormControl) {
		if (control.value == "Test") {
			return { invalidProjectName: true };
		}
		// return null;
	}
}
