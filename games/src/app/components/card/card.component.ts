import { Component, OnInit, Input } from "@angular/core";
import { Game } from "src/app/models/game.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as GamesActions from "./../../store/ratingActions";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  updateRating(rating) {
    this.game.rating = rating;
    this.store.dispatch(
      new GamesActions.UpdateGameRating({
        ...this.game,
        rating: rating
      })
    );
  }
}
