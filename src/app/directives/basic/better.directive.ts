import {
	Directive,
	Renderer2,
	ElementRef,
	OnInit,
	HostListener,
	HostBinding,
	Input
} from "@angular/core";

@Directive({
	selector: "[appBetterDirective]"
})
export class BetterDirective implements OnInit {
	constructor(private eleRef: ElementRef, private rendered: Renderer2) {}

	@Input() defaultColor: string;
	@Input() hoverColor: string;

	@HostBinding("style.backgroundColor")
	backgroundColor: string = this.defaultColor;
	@HostBinding("style.color") color: string = this.defaultColor;

	ngOnInit() {
		// this.rendered.setStyle(
		// 	this.eleRef.nativeElement,
		// 	"backgroundColor",
		// 	"#ff0"
		// );
		this.color = this.defaultColor;
	}

	@HostListener("mouseover")
	onMouseOver() {
		this.rendered.setStyle(
			this.eleRef.nativeElement,
			"backgroundColor",
			"#f00"
		);
		this.rendered.setStyle(this.eleRef.nativeElement, "color", this.hoverColor);
		// this.backgroundColor = "#f00";  // Using HostBinding we can change any style ex:bg-color too
	}
	@HostListener("mouseout")
	onMouseOut() {
		this.rendered.setStyle(
			this.eleRef.nativeElement,
			"backgroundColor",
			"#fff"
		);
		this.rendered.setStyle(
			this.eleRef.nativeElement,
			"color",
			this.defaultColor
		);
		// this.backgroundColor = "transparent";  // Using HostBinding we can change any style ex:bg-color too
	}
}
