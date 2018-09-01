import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Server } from "./server.model";
import { ServerService } from "./server.service";

@Component({
	selector: "app-routing-servers",
	templateUrl: "./servers.component.html"
})
export class ServersRoutingComponent implements OnInit {

	servers: Server[] = [];
	public selectedServer: Server;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private serverService: ServerService
	) {}

	updateServer(e) {
		console.log(e, "event navya")
		let data = {
      id: e.serverId,
      name: e.serverName,
      location: e.serverLocation
    }
		// console.log(e.serverId, e.serverName, e.serverLocation, e, 'e');
		this.servers = this.serverService.setDataForId(data);
	}

	ngOnInit() {
		this.servers = this.serverService.getServers();
		// console.log(this.serverService.getServers(), this.servers, 'servers');
		this.serverService.clickedServer.subscribe((server: Server) => this.selectedServer = server)
	}

}
