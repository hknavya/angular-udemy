import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
	selector: "[appBasicDirective]"
})
export class BasicDirective implements OnInit {
	constructor(private elementRef: ElementRef) {}

	ngOnInit() {
		console.log("here");
		this.elementRef.nativeElement.style.backgroundColor = "cyan";
	}
}
