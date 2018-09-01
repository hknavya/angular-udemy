import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable({
	providedIn: "root"
})
export class ActiveInactiveService {
	public activeUsers = ["James", "Kevin", "Taylor"];
	public inactiveUsers = ["Brian", "David", "Michael"];

	constructor(private countservice: CountService) {}

	onSetToActive(i) {
		console.log(i, "i", this.inactiveUsers[i]);
		this.activeUsers.push(this.inactiveUsers[i]);
		this.inactiveUsers.splice(i, 1);
		this.countservice.countInactiveToActive();
	}
	onSetToInactive(i) {
		console.log(i, "i", this.activeUsers[i]);
		this.inactiveUsers.push(this.activeUsers[i]);
		this.activeUsers.splice(i, 1);
		this.countservice.countActiveToInactive();
	}
}
