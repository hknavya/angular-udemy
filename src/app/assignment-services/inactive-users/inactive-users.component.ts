import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActiveInactiveService } from "../active-inactive.service";

@Component({
	selector: "app-inactive-users",
	templateUrl: "./inactive-users.component.html"
})
export class InactiveUsersComponent implements OnInit {
	// @Output() setActive = new EventEmitter<any>();
	// @Input() users;
	public users;

	constructor(private activeInactiveService: ActiveInactiveService) {}

	setToActive(index) {
		// this.setActive.emit(index);
		this.activeInactiveService.onSetToActive(index);
	}

	ngOnInit() {
		this.users = this.activeInactiveService.inactiveUsers;
	}
}
