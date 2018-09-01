import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class AccountService {
	public accounts = [];

	constructor() {}

	addAccount(accName: string, accStatus: string) {
		this.accounts.push({ name: accName, status: accStatus });
	}

	onUpdateStatus(id, changedStatus: string) {
		console.log(changedStatus, "changedStatus", this.accounts);
		this.accounts[id].status = changedStatus;
	}

	public showChangedStatusOnAlert = new EventEmitter<any>();
}
