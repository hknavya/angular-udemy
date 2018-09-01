import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../user.model";
import { UserRoutingService } from "../user.service";

@Component({
	selector: "app-routing-user",
	templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit {
	@Input() user: User;
	@Output() clickedUser = new EventEmitter<User>()
	constructor(private userRoutingService: UserRoutingService) {}

	getUserDetail(user) {
		console.log(this.user, 'User id');
		// this.clickedUser.emit(this.user);
		this.userRoutingService.clickedUser.emit(this.user);
	}

	ngOnInit() {
		console.log(this.user, 'user')
	}
}
