import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
	selector: "[appDropdown]"
})
export class DropdownDirective {
	@HostBinding("class.show") isOpen = false;

	@HostListener("click")
	toggleOpen() {
		console.log(this.isOpen, "isOpen");
		this.isOpen = !this.isOpen;
	}

	constructor() {}
}
