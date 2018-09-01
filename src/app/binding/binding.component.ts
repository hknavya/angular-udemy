import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-binding",
	templateUrl: "./binding.component.html"
})
export class BindingComponent implements OnInit {
	public makeBtnEnable = false;
	public username = "Kailash";

	constructor() {
		setTimeout(() => {
			this.makeBtnEnable = true;
		}, 2000);
	}

	ngOnInit() {}

	onReset() {
		this.username = "";
	}
}
