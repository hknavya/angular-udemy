import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({
	providedIn: "root"
})
export class UserService {
	users: User[] = [
		new User(1, "Max", "London"),
		new User(2, "Jordon", "Birmingham"),
		new User(3, "Morgan", "The Oval")
	];

	constructor() {}

	// selectedUser.emit<User>();

	getUsers() {
		return this.users;
	}

	getSelectedUserData(selectedUserId, selectedUserName) {
		return this.users[selectedUserId - 1]; // id's are 1, 2, 3 etc but index starts from 0, 1, 2 etc so given -1
	}
}
