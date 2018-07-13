export function getLatestClick(value) {
    return {
      type: "LATEST_CLICK",
      value
    };
  }
  
  export function getActiveTileId(id) {
    return {
      type: "ACTIVE_TILE_ID",
      id
    };
  }
  
  export function activeTile(active) {
    return {
      type: "ACTIVE_TILE",
      active
    };
  }
  