import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable({
	providedIn: "root"
})
export class ObservableUserService {
	constructor() {}

	userActivated = new Subject();
}
