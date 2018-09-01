import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ObsUser } from "./obs-user.model";
import { ObsUserService } from "./obs-user.service";

@Component({
	selector: "app-obs-user",
	templateUrl: "./obs-user.component.html"
})
export class ObsUserComponent implements OnInit {
	public obsUsers: ObsUser[] = [];
	public selectedUser;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private obsUserService: ObsUserService
	) {}

	ngOnInit() {
		this.obsUsers = this.obsUserService.getObsUsers();

		this.activatedRoute.params.subscribe((params: Params) => {
			console.log(params, "dfg");
			this.selectedUser = params["id"];
		});
	}
}
