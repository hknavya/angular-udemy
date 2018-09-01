import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: "app-edit",
	templateUrl: "./edit.component.html"
})
export class RecipesEditComponent implements OnInit {
	public id;
	public editMode = false;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.id = params["id"];
			console.log(params, "params");
			console.log(params["id"], this.id, "thisss");
			this.editMode = params["id"] != null;
			console.log(this.editMode, "editMode");
		});
	}
}
