import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-routing",
	templateUrl: "./routing.component.html"
})
export class RoutingComponent implements OnInit {
	// public loadingComponent = "home";
	constructor(
		private router: Router,
		private route: ActivatedRoute
	) {}

	// onTabMenu(selectedTab) {
	// 	// console.log(selectedTab, "selectedTab");
	// 	this.loadingComponent = selectedTab;
	// }

	ngOnInit() {
		// let parsedUrl = this.router.url; // Get the URL
		// console.log(parsedUrl, 'parderUrl');
		// var final = parsedUrl.substr(parsedUrl.lastIndexOf("/") + 1); // Find the last value of URL
		// console.log(final)
		// if( final == "ang-routing" ){
		// 	final = "home"  // If url parh is /ang-routing, make it to /ang-routing/home
		// }
		// this.loadingComponent = final;
	}
}
