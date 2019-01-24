import React, { Component } from 'react';
import './CharacterCard.scss';
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
                <h1 className="text-character-name">{characterData.name}</h1>
                <img className="character-img" src={characterData.image} alt=""/>
                <h2 className="text-character-house">{characterData.house}</h2>
                </div>
            </Link>
         );
    }
}
 
export default CharacterCard;