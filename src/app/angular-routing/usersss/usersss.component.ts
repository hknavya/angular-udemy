import { Component, OnInit, Input } from "@angular/core";
import { User } from "./user.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "./user.service";

@Component({
	selector: "app-routing-usersss",
	templateUrl: "./usersss.component.html"
})
export class UsersssRoutingComponent implements OnInit {
	public users: User[] = [];
	// @Input() recipe: Recipe;
	// @Input() id;

	constructor(
		private userService: UserService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	// onClickUser(user) {
	// 	console.log(user, "selected user");
	// 	this.router.navigate(["angular-routinggg", "usersss", user.id, user.name], queryParams: {'city': user.city});
	// }

	ngOnInit() {
		this.users = this.userService.getUsers();
	}
}
