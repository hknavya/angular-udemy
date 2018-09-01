import {
	Component,
	OnInit,
	EventEmitter,
	ElementRef,
	Input
} from "@angular/core";
import {
	trigger,
	state,
	animate,
	transition,
	style
} from "@angular/animations";
import * as $ from "jquery";

@Component({
	selector: "app-general-list",
	templateUrl: "./list.component.html",
	animations: [
		trigger("toggleState", [
			state(
				"true",
				style({ maxHeight: "200px", padding: 0, display: "block" })
			),
			state("false", style({ maxHeight: 0, padding: 0, display: "none" })),
			// transition
			transition("* => *", animate("300ms"))
		])
	]
	// outputs: ["subList"]
})
export class ListComponent implements OnInit {
	constructor(private el: ElementRef) {}

	// public subList = new EventEmitter<string>();
	public showLists;
	@Input()
	set level(message: boolean) {
		this.showLists = message;
	}
	get level() {
		return this.showLists;
	}

	// showSublists(event) {
	// 	console.log("value werty", this.el.nativeElement);
	// 	this.showLists = !this.showLists;
	// 	// $("ul", this.el.nativeElement).slideToggle();
	// 	this.subList.emit();
	// }

	ngOnInit() {}
}
