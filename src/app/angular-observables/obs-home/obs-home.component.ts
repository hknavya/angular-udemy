import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";
import { Observer } from "rxjs/Observer";

@Component({
	selector: "app-obs-home",
	templateUrl: "./obs-home.component.html"
})
export class ObsHomeComponent implements OnInit, OnDestroy {
	intervalObservableSubscription: Subscription;
	customObservableSubscription: Subscription;

	constructor() {}

	ngOnInit() {
		const myNumbers = Observable.interval(1000);
		this.intervalObservableSubscription = myNumbers.subscribe(
			(number: number) => {
				console.log(number);
			}
		);

		const myFirstObservable = Observable.create((observer: Observer<any>) => {
			setTimeout(() => {
				observer.next("first observe");
			}, 2000),
				setTimeout(() => {
					observer.next("second observe");
				}, 4000),
				setTimeout(() => {
					observer.error("No more observe to show");
					// observer.complete();
				}, 6000),
				setTimeout(() => {
					observer.complete();
					// observer.error("No more observe to show");
				}, 8000);
		});
		this.customObservableSubscription = myFirstObservable.subscribe(
			(data: string) => {
				console.log(data);
			},
			(error: string) => {
				console.log(error);
			},
			() => {
				console.log("completed");
			}
		);
	}

	ngOnDestroy() {
		this.intervalObservableSubscription.unsubscribe();
		this.customObservableSubscription.unsubscribe();
	}
}
