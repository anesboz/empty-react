import { SWITCH_NIGHT_DAY } from "../actions/types";

const initalState = {
  light: true
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SWITCH_NIGHT_DAY:
      return {
        ...state,
        light: action.payload,
      };

    default:
      return state;
  }
};
