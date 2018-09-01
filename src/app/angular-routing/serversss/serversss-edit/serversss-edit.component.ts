import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ServerService } from "../server.service";

@Component({
	selector: "app-serversss-edit",
	templateUrl: "./serversss-edit.component.html"
})
export class ServersssEditComponent implements OnInit {
	// @Input() selectedServer;
	public editSelectedServer;
	public selectedServerCont;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private serverService: ServerService
	) {}

	ngOnInit() {
		// console.log(this.selectedServer, "this");
		this.activatedRoute.params.subscribe((params: Params) => {
			// console.log(params, "params");
			this.editSelectedServer = params["id"];
			this.selectedServerCont = this.serverService.getSelectedServerContent(
				this.editSelectedServer
			);
		});
	}

	onSave(serverId, serverName, serverLocation) {
		let serverDetail = {
			id: serverId,
			name: serverName,
			location: serverLocation
		};
		this.serverService.updateSelectedServer(
			serverDetail,
			this.selectedServerCont
		);
		// console.log(serverDetail, "serverDetail");
	}
}
