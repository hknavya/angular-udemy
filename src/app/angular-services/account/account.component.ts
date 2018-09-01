import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
	selector: "app-account",
	templateUrl: "./account.component.html"
})
export class AccountComponent implements OnInit {
	@Input() account: { name: string; status: string };
	@Input() id;
	// @Output() setStatus = new EventEmitter<any>();

	constructor(private accountService: AccountService) {}

	onSet(status) {
		console.log("The account status changed to : " + status);
		// this.setStatus.emit({ id: this.id, newStatus: status });
		this.accountService.onUpdateStatus(this.id, status);
		this.accountService.showChangedStatusOnAlert.emit(status);
	}

	ngOnInit() {
		// this.accountService.showChangedStatusOnAlert.subscribe(
		// 	(status: string) => alert("New status is - " + status);
		// );  //  Can write anywhere
	}
}
