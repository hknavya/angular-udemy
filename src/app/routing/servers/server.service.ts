import { Injectable, EventEmitter } from "@angular/core";
import { Server } from "./server.model";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  public servers: Server[] = [
    new Server(1, "Test", "London"),
    new Server(2, "Stage", "Brisbane"),
    new Server(3, "Live", "Canbera")
  ];

  clickedServer = new EventEmitter<any>();

  constructor() {
    // console.log(this.servers, 'const')
  }

  getServers() {
    // let data = Object.assign([], this.servers);
    // console.log(data, "navya")
    return this.servers;
  }

  setDataForId(data) {
    console.log(data, "set data");
    for (let item of this.servers) {
      if (item.id == data.id) {
        item.name = data.name;
        item.location = data.location;
      }
    }
    return this.servers;
  }
}
