import React, { Component } from 'react';

import { colors } from '../data/data';
import shuffle from 'lodash/shuffle';

export class Tiles extends Component {
    constructor(props) {
      super(props);
      this.state = {
        game: false,
        latestClick: '',
        tiles: [],
      };
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const btn = e.target;
        btn.setAttribute('disabled', null);
        this.setState({ 
            latestClick: e.target.value
        });
    }

    // endGame() {
    //     this.setState({
    //         game: false,
    //         tiles: [],
    //         latestClick: ''
    //       });
    // }

    componentWillMount() {
        this.setState({ tiles: shuffle(colors)});
    }

    componentWillUpdate(nextProps, nextSate) {
        if(this.state.latestClick === nextSate.latestClick) {
            delete this.state.tiles[this.state.tiles.indexOf(this.state.latestClick)];
            delete this.state.tiles[this.state.tiles.indexOf(nextSate.latestClick)];
        }
    }

    componentDidUpdate(prevProps, prevState) {
        prevState.tiles.every(elem => {
            return elem === undefined ? alert('You are a winer') : false;
        });
    }
    
    render() {
        const tiles = this.state.tiles.map((elem, i) => {
            return <button 
                      className="tile" 
                      value={elem} 
                      key={'playbutton_' + i}
                      style={{backgroundColor: elem}}
                      onClick={this.onClick} 
                      disabled={this.state.disabled}>
                      {elem}
                   </button>
        })
        return (
            <div>
                {tiles}
            </div>
        );
    }
}