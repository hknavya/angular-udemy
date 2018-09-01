import { Component, OnInit } from "@angular/core";
// import { BasicDirective } from "basic/basic.directive";

@Component({
	selector: "app-directives",
	templateUrl: "./directives.component.html"
})
export class DirectivesComponent implements OnInit {
	constructor() {}

	// public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	public EvenNumbers = [2, 4, 6, 8, 10];
	public OddNumbers = [1, 3, 5, 7, 9];
	// public showEvenNumbers = true;
	public showNumbers;

	onShowNumbers() {
		this.showNumbers = !this.showNumbers;
	}

	ngOnInit() {}
}
