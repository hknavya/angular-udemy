import { Injectable } from "@angular/core";
import { ObsUser } from "./obs-user.model";

@Injectable({
	providedIn: "root"
})
export class ObsUserService {
	public ObsUsers: ObsUser[] = [
		new ObsUser(1, "user1"),
		new ObsUser(2, "user2")
	];

	constructor() {}

	getObsUsers() {
		return this.ObsUsers;
	}
}
