import { Component, OnInit, Input } from '@angular/core';
import { Server } from "../server.model";
import { ServerService } from "../server.service";

@Component({
  selector: 'app-routing-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

	@Input() server: Server[];

  constructor(private serverService: ServerService) { }

  onClickServer(server) {
  	console.log(server, 'ser');
  	this.serverService.clickedServer.emit(this.server);
  }

  ngOnInit() {}

}
