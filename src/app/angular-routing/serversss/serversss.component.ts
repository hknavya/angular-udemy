import { Component, OnInit } from "@angular/core";
import { Server } from "./server.model";
import { ServerService } from "./server.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "app-routing-serversss",
	templateUrl: "./serversss.component.html"
})
export class ServersssRoutingComponent implements OnInit {
	public servers: Server[] = [];
	// public allowEdit;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private serverService: ServerService
	) {}

	loadServer() {
		console.log("ind server");
	}

	ngOnInit() {
		this.servers = this.serverService.getServers();
	}
}
