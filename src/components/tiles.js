import React, { Fragment } from "react";

export const Tiles = props => {
  return (
    <Fragment>
      <button
        style={{ backgroundColor: props.tilesColor }}
        value={props.value}
        className={
          props.id === props.activeTileId ? "tile-inner active" : "tile-inner"
        }
        onClick={e => {
          const tile = e.target.value;
          props.latestClickId(props.id);
            props.latestClickValue(props.value);
            props.setActiveTile(tile);
        }}
        disabled={props.id === props.activeTileId ? "disabled" : null}
      />
    </Fragment>
  );
};