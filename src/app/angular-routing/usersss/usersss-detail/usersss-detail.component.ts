import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../user.service";

@Component({
	selector: "app-usersss-detail",
	templateUrl: "./usersss-detail.component.html"
})
export class UsersssDetailComponent implements OnInit {
	public selectedUserId;
	public selectedUser;
	public selectedUserName;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private userService: UserService
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.selectedUserId = +params["id"];
			this.selectedUserName = params["name"];
			this.selectedUser = this.userService.getSelectedUserData(
				this.selectedUserId,
				this.selectedUserName
			);
		});
	}
}
