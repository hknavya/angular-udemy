import { Injectable } from "@angular/core";
import { Server } from "./server.model";
import * as _ from "underscore";

@Injectable({
	providedIn: "root"
})
export class ServerService {
	servers: Server[] = [
		new Server(100, "Test", "Sydney"),
		new Server(4354, "Stage", "Brisbane"),
		new Server(676, "Live", "Adelaid")
	];

	constructor() {}

	getServers() {
		return this.servers;
	}

	getSelectedServerData(serverId) {
		// let pluckedVals = _.pluck(this.servers, "id");
		let filterdVal = _.filter(this.servers, function(serv) {
			return serv.id == serverId;
		});
		console.log(filterdVal, "pluckedVals");
		return filterdVal[0];
	}

	getSelectedServerContent(selectedServerId) {
		let filterdValOfServer = _.filter(this.servers, function(selServ) {
			return selServ.id == selectedServerId;
		});
		return filterdValOfServer[0];
	}

	updateSelectedServer(updatedServerDetail, selectedServerCont) {
		console.log(updatedServerDetail, selectedServerCont, "difference");
	}
}
