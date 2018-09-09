import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-angular-pipes",
	templateUrl: "./angular-pipes.component.html"
})
export class AngularPipesComponent implements OnInit {
	lists = [
		{
			name: "Test",
			status: "Stable",
			type: "Large"
		},
		{
			name: "Stage",
			status: "Critical",
			type: "Medium"
		},
		{
			name: "Live",
			status: "Offline",
			type: "Low"
		}
	];

	serverFilter = "";
	appStatus = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Kailash (after 2 sec)");
		}, 2000);
	});

	constructor() {}

	onAddServer() {
		this.lists.push({
			name: "Demo",
			status: "Stable",
			type: "High"
		});
	}

	ngOnInit() {}
}
