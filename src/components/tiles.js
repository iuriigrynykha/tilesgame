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
        tilesSet: [],
        disabled: false
      };
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.target.setAttribute('disabled', null);
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

    componentWillUpdate(nextProps, nextState) {
        const tilesSet = this.state.tilesSet;
        tilesSet.push(nextState.latestClick);

        if(tilesSet[0] === tilesSet[1]) {
            delete this.state.tiles[this.state.tiles.indexOf(this.state.latestClick)];
            delete this.state.tiles[this.state.tiles.indexOf(nextState.latestClick)];
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const btns = document.querySelectorAll('.tile');
        console.log(this.state.tilesSet.length);
        if(this.state.tilesSet.length === 2) {
            btns.forEach((elem) => {
                elem.removeAttribute('disabled');
            });
            this.setState({ tilesSet: [] });
        } 
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