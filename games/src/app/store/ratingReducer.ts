import { Action } from "@ngrx/store";

import * as GamesActions from "./ratingActions";
import { Game } from "../models/game.model";
import { gamesList } from "../data/games";

const randomArray = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const initialState = gamesList;

// Reducer
export function reducer(
  state: Game[] = initialState,
  action: GamesActions.Actions
) {
  // Reducer Actions
  switch (action.type) {
    case GamesActions.UPDATE_GAME_RATING:
      let index = state.map(game => game.id).indexOf(action.payload.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.payload.id),
        ...state.slice(index + 1)
      ].sort(function(a, b) {
        return b.rating - a.rating;
      });
    case GamesActions.ASSIGN_RANDOM_RATING:
      return state
        .map(x => ({
          ...x,
          rating: randomArray(1, 5)
        }))
        .sort(function(a, b) {
          return b.rating - a.rating;
        });
    default:
      return state
        .map(x => ({
          ...x,
          rating: randomArray(1, 5)
        }))
        .sort(function(a, b) {
          return b.rating - a.rating;
        });
  }
}
