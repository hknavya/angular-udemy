import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ServerService } from "../server.service";
import { Server } from "../server.model";

@Component({
	selector: "app-serversss-detail",
	templateUrl: "./serversss-detail.component.html"
})
export class ServersssDetailComponent implements OnInit {
	public serversssId;
	public selectedServer;
	public allowEdit;
	// @Input() selectedServer;
	// @Output() editServer = new EventEmitter<Server>();
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private serverService: ServerService
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.serversssId = params["id"];
			console.log(this.serversssId, params["id"], params);
			this.selectedServer = this.serverService.getSelectedServerData(
				this.serversssId
			);
			// console.log(this.selectedServer.id, "this this");
		});

		this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
			console.log(queryParams, queryParams["allowEdit"], "queryParams");
			this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
			console.log(this.allowEdit, "allowEditttt");
		});
	}

	onEditServer(selectedServer) {
		// console.log(selectedServer, "selectedServer22");
		// this.editServer.emit(this.selectedServer);
		this.router.navigate(["edit"], {
			relativeTo: this.activatedRoute,
			queryParamsHandling: "preserve"
		});
	}
}
