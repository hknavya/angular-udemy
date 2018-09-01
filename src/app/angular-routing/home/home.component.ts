import { Component, OnInit } from "@angular/core";
import { AuthGuardService } from "../../auth-guard.service";
import { AuthServiceService } from "../../auth-service.service";

@Component({
	selector: "app-routing-homeee",
	templateUrl: "./home.component.html"
})
export class HomeeeRoutingComponent implements OnInit {
	constructor(
		private authGuardService: AuthGuardService,
		private authServiceService: AuthServiceService
	) {}

	ngOnInit() {}

	login() {
		this.authServiceService.login();
	}

	logout() {
		this.authServiceService.logout();
	}
}
