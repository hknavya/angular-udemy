import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-game-control-even-numbers",
	templateUrl: "./even.component.html"
})
export class EvenComponent implements OnInit {
	@Input() number: number;
	constructor() {}

	ngOnInit() {}
}
