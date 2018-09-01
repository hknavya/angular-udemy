import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActiveInactiveService } from "../active-inactive.service";

@Component({
	selector: "app-active-users",
	templateUrl: "./active-users.component.html"
})
export class ActiveUsersComponent implements OnInit {
	// @Output() setInactive = new EventEmitter<any>();
	// @Input() users;
	public users;

	constructor(private activeInactiveService: ActiveInactiveService) {}

	setToInactive(index) {
		// this.setInactive.emit(index);
		this.activeInactiveService.onSetToInactive(index);
	}

	ngOnInit() {
		this.users = this.activeInactiveService.activeUsers;
	}
}
