import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-assignment-services",
	templateUrl: "./assignment-services.component.html"
})
export class AssignmentServicesComponent implements OnInit {
	public activeUsers = ["James", "Kevin", "Taylor"];
	public inactiveUsers = ["Brian", "David", "Michael"];

	constructor() {}

	// onSetActive(i) {
	// 	console.log(i, "Active");
	// 	this.activeUsers.push(this.inactiveUsers[i]);
	// 	this.inactiveUsers.splice(i, 1);
	// }

	// onSetInactive(i) {
	// 	console.log(i, "Inactive");
	// 	this.inactiveUsers.push(this.activeUsers[i]);
	// 	this.activeUsers.splice(i, 1);
	// }

	ngOnInit() {}
}
