import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ObsUser } from "./obs-user.model";
import { ObsUserService } from "./obs-user.service";
import { ObservableUserService } from "../observable-user.service";

@Component({
	selector: "app-obs-user",
	templateUrl: "./obs-user.component.html"
})
export class ObsUserComponent implements OnInit {
	public obsUsers: ObsUser[] = [];
	public selectedUserId: number;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private obsUserService: ObsUserService,
		private observableUserService: ObservableUserService
	) {}

	ngOnInit() {
		this.obsUsers = this.obsUserService.getObsUsers();

		this.activatedRoute.params.subscribe((params: Params) => {
			this.selectedUserId = params["id"];
		});
	}

	onActivate() {
		console.log(this.selectedUserId, "id");
		this.observableUserService.userActivated.next(this.selectedUserId);
	}
}
