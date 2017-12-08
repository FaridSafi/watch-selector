import * as types from "./actionTypes";

const initialState = {
  selectedWatch: {
    id: null,
    name: null
  }
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SELECT_WATCH:
      return {
        selectedWatch: {
          id: action.watch.id,
          name: action.watch.name
        }
      };
    default:
      return state;
  }
}
