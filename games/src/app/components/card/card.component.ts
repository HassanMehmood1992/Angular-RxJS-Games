import { Component, OnInit, Input } from "@angular/core";
import { Game } from "src/app/models/game.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() game: Game;
  constructor() {}

  ngOnInit() {}
}
