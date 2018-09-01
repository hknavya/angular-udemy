import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-game-control",
	templateUrl: "./game-control.component.html"
})
export class GameControlComponent implements OnInit {
	public interval;
	public intervalNumber = 0;
	@Output() startGame = new EventEmitter<number>();
	@Output() stopGame = new EventEmitter<number>();

	constructor() {}

	onStartGame() {
		this.interval = setInterval(() => {
			this.startGame.emit(this.intervalNumber);
			this.intervalNumber++;
		}, 1000);
	}

	onStopGame() {
		clearInterval(this.interval);
	}

	ngOnInit() {}
}
