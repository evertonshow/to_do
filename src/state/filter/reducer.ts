import * as filterTypes from "./types";

function reducer(_state: any, action: any) {
  if (action.type === filterTypes.TOGGLE_FILTER) {
    return action.payload.filter;
  }
}
export default reducer;
