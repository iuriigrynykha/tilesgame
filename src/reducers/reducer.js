import colors from "../data/colors";
import shuffle from "lodash/shuffle";
export default function reducer(
  state = {
    latestClick: null,
    activeTileId: null,
    active: false,
    shuffledColors: shuffle(colors)
  },
  action
) {
  switch (action.type) {
    case "LATEST_CLICK":
      return { ...state, latestClick: action.value };
    case "ACTIVE_TILE_ID":
      return { ...state, activeTileId: action.id };
    case "ACTIVE_TILE":
      return { ...state, active: action.active };
    default:
      return state;
  }
}
