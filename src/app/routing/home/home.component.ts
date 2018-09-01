import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-routing-home",
	templateUrl: "./home.component.html"
})
export class HomeRoutingComponent implements OnInit {

	// @Output() onLoadServers = new EventEmitter<any>();
	constructor(
		private router: Router,
		private route: ActivatedRoute
	) {}

	loadServers() {
		this.router.navigate(["ang-routing/servers"]);
	}

	ngOnInit() {
		// let findUrl = this.router.url;
		// console.log(findUrl, 'findUrl');
		// let urlLastValue = findUrl.substr(findUrl.lastIndexOf("/") + 1);
		// console.log(urlLastValue, 'urlLastValue');


	}
}
