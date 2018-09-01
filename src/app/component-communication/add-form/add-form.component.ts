import {
	Component,
	OnInit,
	EventEmitter,
	Output,
	ViewChild
} from "@angular/core";

@Component({
	selector: "app-comp-comm-add-form",
	templateUrl: "./add-form.component.html"
})
export class CompCommAddFormComponent implements OnInit {
	constructor() {}
	public newElementName = "";
	public newElementDescription = "";

	@Output() serverCreated = new EventEmitter<any>(); // can be use alias name @Output('aliasName') ...
	@Output() blueprintCreated = new EventEmitter<any>();

	// @ViewChild("localReferenceName") localVar : ElementRef;  // localReferenceName is the local reference where we can give to any element in html

	addServerButton() {
		console.log("am here");
		// console.log(this.localVar, "local ref");
		this.serverCreated.emit({
			elName: this.newElementName,
			elDesc: this.newElementDescription
		});
	}

	addBlueprintButton() {
		this.blueprintCreated.emit({
			elName: this.newElementName,
			elDesc: this.newElementDescription
		});
	}

	ngOnInit() {}
}
