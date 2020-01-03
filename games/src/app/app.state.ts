import { Game } from "./models/game.model";

export interface AppState {
  readonly games: Game[];
}
