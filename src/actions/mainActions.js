import { SWITCH_NIGHT_DAY } from "./types";

export const switchMode = (mode) => (dispatch) => {
  console.log("switchMode");
  dispatch({
    type: SWITCH_NIGHT_DAY,
    payload: mode,
  });
}