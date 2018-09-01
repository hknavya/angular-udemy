import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./user.model";

@Injectable({
	providedIn: "root"
})
export class UserRoutingService {
	users: User[] = [
		new User( 1, "Morgan", "Auckland"),
		new User( 2, "Brendon", "Hamilton"),
		new User( 3, "Boult", "Sydney")
	];
	constructor() {}

	clickedUser = new EventEmitter<User>();

	getUsers() {
		return this.users;
	}
}
