import React, { Component } from 'react';
import { Tiles } from './tiles';

export class Game extends Component {  
    render() {
      return (
        <div className="game-container">           
            <Tiles />
        </div>
      );
    }
  }