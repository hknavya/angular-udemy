import { Component, OnInit, OnChanges } from "@angular/core";

@Component({
	selector: "app-component-communication",
	templateUrl: "./component-communication.component.html"
})
export class ComponentCommunicationComponent implements OnInit {
	public serverElements = [
		{ type: "Server", name: "Kailash", desc: "Im here for testing" }
	];

	constructor() {}

	onServerAdded(serverData: { elName: string; elDesc: string }) {
		console.log(serverData, "serverData");
		this.serverElements.push({
			type: "Server",
			name: serverData.elName,
			desc: serverData.elDesc
		});
	}

	onBlueprintAdded(blueprintData: { elName: string; elDesc: string }) {
		this.serverElements.push({
			type: "Blueprint",
			name: blueprintData.elName,
			desc: blueprintData.elDesc
		});
	}

	ngOnInit() {}

	// ngOnChanges demo
	onChangesDemo() {
		console.log(this.serverElements, "nameee");
		this.serverElements[0].name = "Patil";
		// this.serverElements[0].desc = "some content !!";
	}

	onDestroyDemo() {
		this.serverElements.splice(0, 1);
	}

	// public showServerDetail = false;
	// public showBlueprintDetail = false;
	// public serverName;
	// public serverDescription;
	// public blueprintName;
	// public blueprintDescription;

	// constructor() {}

	// addServer(name, desc) {
	// 	console.log(name, desc, "server");
	// 	this.showServerDetail = true;
	// 	this.serverName = name;
	// 	this.serverDescription = desc;
	// }

	// addBlueprint(name, desc) {
	// 	console.log(name, desc, "blueprint");
	// 	this.showBlueprintDetail = true;
	// 	this.blueprintName = name;
	// 	this.blueprintDescription = desc;
	// }
}
