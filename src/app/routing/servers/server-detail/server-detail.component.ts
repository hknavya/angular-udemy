import { Component, OnInit, Input } from "@angular/core";
import { Server } from "../server.model";

@Component({
	selector: "app-routing-server-detail",
	templateUrl: "./server-detail.component.html"
})
export class ServerDetailComponent implements OnInit {
	@Input() serv: Server[];

	constructor() {}

	ngOnInit() {
		// console.log(this.serv,"serv");
	}
}
