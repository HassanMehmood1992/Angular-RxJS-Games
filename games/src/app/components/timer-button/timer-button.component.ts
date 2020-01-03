import { Component, OnInit, Input } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-timer-button",
  templateUrl: "./timer-button.component.html",
  styleUrls: ["./timer-button.component.css"]
})
export class TimerButtonComponent implements OnInit {
  label: string;
  isRatingOn: boolean;

  constructor() {
    this.label = "Start Random Rating";
  }

  ngOnInit() {}
  toggleRating() {
    this.isRatingOn = !this.isRatingOn;
    this.isRatingOn
      ? (this.label = "Start Random Rating")
      : (this.label = "Stop Random Rating");
    this.isRatingOn ? this.startRating() : this.stopRating();
  }
  startRating() {}
  stopRating() {}
}
