import { Component, OnInit } from "@angular/core";
import { ObservableUserService } from "./observable-user.service";

@Component({
	selector: "app-angular-observables",
	templateUrl: "./angular-observables.component.html"
})
export class AngularObservablesComponent implements OnInit {
	user1Activated = false;
	user2Activated = false;

	constructor(private observableUserService: ObservableUserService) {}

	ngOnInit() {
		this.observableUserService.userActivated.subscribe(
			(selectedUserId: number) => {
				if (selectedUserId == 1) {
					console.log(this.user1Activated, "user1");
					this.user1Activated = true;
				} else if (selectedUserId == 2) {
					this.user2Activated = true;
					console.log(this.user2Activated, "use2");
				}
			}
		);
	}
}
