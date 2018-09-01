import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	Output,
	EventEmitter
} from "@angular/core";
import { AccountService } from "../account.service";

@Component({
	selector: "app-new-account",
	templateUrl: "./new-account.component.html"
})
export class NewAccountComponent implements OnInit {
	@ViewChild("accName") accountName: ElementRef;
	@ViewChild("accStatus") accountStatus: ElementRef;

	// @Output() onSaveData = new EventEmitter<any>();

	constructor(private accountService: AccountService) {
		this.accountService.showChangedStatusOnAlert.subscribe((status: string) =>
			alert("New status is - " + status)
		);
	}

	onSave(accNameValue, accStatusValue) {
		// console.log(accNameValue, accStatusValue, "values");
		// this.onSaveData.emit({
		// 	name: accNameValue,
		// 	status: accStatusValue
		// });
		this.accountService.addAccount(accNameValue, accStatusValue);
	}

	resetData() {
		this.accountName.nativeElement.value = "";
		this.accountStatus.nativeElement.value = "";
	}

	ngOnInit() {}
}
