import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from "../server.model";
import { ServerService } from "../server.service";

@Component({
  selector: 'app-routing-server-edit',
  templateUrl: './server-edit.component.html'
})
export class ServerEditComponent implements OnInit {

	@Input() editServer: Server;
	@Output() editServ = new EventEmitter<any>();
	public editableServer;
  public serverService = new ServerService();

  constructor() { 
  }

  onSubmit(id, name, location) {
    
  	console.log(name, location, this.editServer.id);
  	this.editServ.emit({
  		serverId: id,
  		serverName: name,
  		serverLocation: location
  	});

    // this.serverService.setDataForId(data);

  }

  ngOnInit() {}

}
