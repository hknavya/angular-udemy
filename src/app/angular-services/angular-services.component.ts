import { Component, OnInit } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
	selector: "app-angular-services",
	templateUrl: "./angular-services.component.html"
})
export class AngularServicesComponent implements OnInit {
	public accounts = [];

	constructor(private accountService: AccountService) {}

	// onSavingNewAccountData(newAccount: { name: string; status: string }) {
	// 	this.accounts.push(newAccount);
	// }

	// onSetStatus(id: string, newStatus: string) {
	// 	// console.log(currentStatus, this.accounts, "currentStatus");
	// 	// this.accounts[currentStatus.id].status = currentStatus.newStatus;
	// 	this.accountService.onUpdateStatus(this.id, newStatus);
	// }

	ngOnInit() {
		this.accounts = this.accountService.accounts;
	}
}
