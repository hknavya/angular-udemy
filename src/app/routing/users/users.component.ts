import { Component, OnInit } from "@angular/core";
import { User } from "./user.model";
import { UserRoutingService } from "./user.service";

@Component({
	selector: "app-routing-users",
	templateUrl: "./users.component.html"
})
export class UsersRoutingComponent implements OnInit {
	public users: User[] = [];
	public selectedUser: User;

	constructor(private userRoutingService: UserRoutingService) {}

	// onSelectedUser(user) {
	// 	console.log(user, 'hoooo');
	// 	this.selectedUser = user;
	// 	console.log(this.selectedUser, 'hooooaaa');
	// }

	ngOnInit() {
		this.users = this.userRoutingService.getUsers();
		this.userRoutingService.clickedUser.subscribe((user: User) => {
			this.selectedUser = user;
		});
		// console.log(this.selectedUser, 'selectedUser')
	}
}
