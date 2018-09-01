import {
	Component,
	OnInit,
	Input,
	AfterContentInit,
	ContentChild,
	OnChanges,
	SimpleChanges,
	ElementRef
} from "@angular/core";

@Component({
	selector: "app-comp-comm-display-form",
	templateUrl: "./display-form.component.html"
	// encapsulation: ViewEncapsulation.None  -
	// It avoids adding strange attr to all the elements in its component (you can see it in inspect),
	// and if we add css here then that css will apply globally irrespective of components
})
export class CompCommDisplayFormComponent
	implements OnInit, AfterContentInit, OnChanges {
	@Input("aliasForInput") element: { type: string; name: string; desc: string };
	@Input() name: string;
	constructor() {}

	// ContentChild usage demo - We access content from different component to here using local Reference (#contentChildDemo)

	@ContentChild("contentChildDemo") contentChildVar: ElementRef;

	ngOnInit() {
		console.log(
			this.contentChildVar.nativeElement.textContent,
			"ContentChild in ngOnInit"
		);
	}
	ngAfterContentInit() {
		console.log(
			this.contentChildVar.nativeElement,
			"ContentChild in ngAfterContentInit"
		);
	}

	// ngOnChanges demo
	ngOnChanges(changes: SimpleChanges) {
		console.log("ngOnChanges called");
		console.log(changes);
	}
}
