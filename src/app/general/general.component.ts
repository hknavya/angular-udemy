import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";

@Component({
	selector: "app-general",
	templateUrl: "./general.component.html"
})
export class GeneralComponent implements OnInit {
	constructor(private renderer: Renderer2, private el: ElementRef) {}
	public showSublists = false;

	toggleSublists() {
		console.log("value", this.el.nativeElement, this.showSublists);
		this.showSublists = !this.showSublists;
		// let target = value.currentTarget;
		// console.log(target, "target");
		// let pTarget = target.parentElement;
		// console.log(pTarget, "pTarget");
		// let siblingOfTarget = target.nextElementSibling;
		// console.log(siblingOfTarget, "siblingOfTarget");
		// if (siblingOfTarget) {
		// 	console.log(siblingOfTarget, "ulLists", this.el.nativeElement);
		// 	// renderer.setElementStyle(siblingOfTarget, "display", "block");
		// } else {
		// 	// renderer.setElementStyle(siblingOfTarget, "display", "none");
		// }
	}

	ngOnInit() {}
}
