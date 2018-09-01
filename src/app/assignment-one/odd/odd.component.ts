import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-game-control-odd-numbers",
	templateUrl: "./odd.component.html"
})
export class OddComponent implements OnInit {
	@Input() number: number;
	constructor() {}

	ngOnInit() {}
}
