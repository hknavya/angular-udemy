import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-inbuilt-directive",
	templateUrl: "./inbuilt-directive.component.html",
	styles: [
		`
		.textWhite{color: #fff;}
	`
	]
})
export class InbuiltDirectiveComponent implements OnInit {
	public toggleContent = false;
	public lists = [];
	public dates = [];
	constructor() {}

	ngOnInit() {}

	toggle() {
		this.toggleContent = !this.toggleContent;
		this.lists.push(this.lists.length + 1);
	}
	applyBgColor(list) {
		console.log(list, "list");
		// return this.lists.length > 4 ? "blue" : "white";
		return list >= 5 ? "blue" : "transparent";
	}
	showDate() {
		this.dates.push(new Date());
	}
}
