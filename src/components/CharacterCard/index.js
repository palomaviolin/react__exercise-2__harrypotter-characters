import React, { Component } from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

class  CharacterCard extends Component {
    showDetailedInfo() {
        console.log('CLicked')
    }

    render() { 
        let characterData = this.props.characterData;
        console.log('Character chard', this.props);
        return (
            <Link to={`/characters/${this.props.characterId}`}>
                <div className="character-container" onClick={this.showDetailedInfo}>
                <h1>{characterData.name}</h1>
                <img src={characterData.image} alt=""/>
                <h2>{characterData.house}</h2>
                </div>
            </Link>
         );
    }
}
 
export default CharacterCard;