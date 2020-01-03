import { Action } from "@ngrx/store";
import { Game } from "../models/game.model";

export const UPDATE_GAME_RATING = "[GAME] Update game rating";
export const ASSIGN_RANDOM_RATING = "[GAME] Assign random ratings";

export class UpdateGameRating implements Action {
  readonly type = UPDATE_GAME_RATING;
  constructor(public payload: Game) {}
}

export class AssignRandomRatings implements Action {
  readonly type = ASSIGN_RANDOM_RATING;
}

export type Actions = UpdateGameRating | AssignRandomRatings;
