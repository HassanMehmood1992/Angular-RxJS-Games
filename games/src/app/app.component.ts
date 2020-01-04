import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Game } from "./models/game.model";
import { AppState } from "./app.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Games";
  breakpoint = 12;
  rowHeight = "370px";

  Games: Observable<Game[]>;
  constructor(private store: Store<AppState>) {
    this.Games = store.select("games");
  }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 800 ? 4 : 12;
    this.rowHeight = "370px";
  }

  onResize(event) {
    if (event.target.innerWidth <= 1100) {
      this.breakpoint = 6;
      this.rowHeight = "450px";
    } else if (event.target.innerWidth <= 800) {
      this.breakpoint = 12;
      this.rowHeight = "300px";
    } else if (event.target.innerWidth >= 1100) {
      this.breakpoint = 12;
      this.rowHeight = "370px";
    } else {
      this.breakpoint = 12;
      this.rowHeight = "370px";
    }
  }
}
