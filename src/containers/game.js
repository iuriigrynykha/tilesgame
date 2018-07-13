import React, { Component } from "react";
import { connect } from "react-redux";

import { Tiles } from "../components/tiles";
import { getLatestClick } from "../actions/clickAction";
import { getActiveTileId } from "../actions/clickAction";
import { activeTile } from "../actions/clickAction";

class Game extends Component {
  UNSAFE_componentWillUpdate(nextProps) {
    const shuffledColorsArray = this.props.shuffledColors;
    if (this.props.latestClick === nextProps.latestClick) {
      delete shuffledColorsArray[
        shuffledColorsArray.indexOf(this.props.latestClick)
      ];
      delete shuffledColorsArray[
        shuffledColorsArray.indexOf(nextProps.latestClick)
      ];
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const checker = this.props.shuffledColors.every(elem => {
      return elem === undefined;
    });
    if (checker) {
      alert("You are a winer! Congrats!");
    }
  }

  render() {
    const tiles = this.props.shuffledColors.map((tile, index) => (
      <div className={`tile tile-${index}`}>
        <Tiles
          key={`tile_${index}`}
          id={index}
          tilesColor={tile}
          value={tile}
          latestClick={this.props.latestClick}
          activeTileId={this.props.activeTileId}
          activeTile={this.props.active}
          latestClickValue={value => this.props.setLastClickValue(value)}
          latestClickId={id => this.props.setActiveTileId(id)}
          setActiveTile={tile => this.props.setActiveTile(tile)}
        />
      </div>
    ));
    return <div className="game-container">{tiles}</div>;
  }
}

const mapStateToProps = state => {
  return {
    latestClick: state.latestClick,
    activeTileId: state.activeTileId,
    active: state.active,
    shuffledColors: state.shuffledColors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLastClickValue: value => {
      dispatch(getLatestClick(value));
    },
    setActiveTileId: id => {
      dispatch(getActiveTileId(id));
    },
    setActiveTile: active => {
      dispatch(activeTile(active));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
