import { Component, OnInit, Input } from "@angular/core";
import { interval } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Subscription } from "rxjs";
import * as GamesActions from "./../../store/ratingActions";

@Component({
  selector: "app-timer-button",
  templateUrl: "./timer-button.component.html",
  styleUrls: ["./timer-button.component.css"]
})
export class TimerButtonComponent implements OnInit {
  label: string;
  isRatingOn: boolean;

  myIntervalSub: Subscription;

  constructor(private store: Store<AppState>) {
    this.label = "Start Random Rating";
    this.isRatingOn = true;
  }

  ngOnInit() {}
  toggleRating() {
    this.isRatingOn = !this.isRatingOn;
    this.isRatingOn
      ? (this.label = "Start Random Rating")
      : (this.label = "Stop Random Rating");
    this.isRatingOn ? this.stopRating() : this.startRating();
  }
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  onStartInterval() {
    this.myIntervalSub = interval(this.getRandomNumber(1000, 5000)).subscribe(
      val => {
        this.store.dispatch(new GamesActions.AssignRandomRatings());
      }
    );
  }
  startRating() {
    this.onStartInterval();
  }
  stopRating() {
    if (this.myIntervalSub) {
      this.myIntervalSub.unsubscribe();
    }
  }
  ngOnDestroy() {
    if (this.myIntervalSub) {
      this.myIntervalSub.unsubscribe();
    }
  }
}
