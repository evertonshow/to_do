import * as filterTypes from "./types";

export function toggleFilter(filter: any) {
  return {
    type: filterTypes.TOGGLE_FILTER,
    payload: {
      filter,
    },
  };
}
