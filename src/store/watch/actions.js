import * as types from "./actionTypes";

export function selectWatch(watch) {
  return {
    type: types.SELECT_WATCH,
    watch
  };
}
