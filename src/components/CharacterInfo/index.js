import React, { Component } from 'react';
import './CharacterInfo.scss';

class CharacterInfo extends Component {
    render() { 
        let characters = this.props.characters;
        let characterData = characters[this.props.match.params.id];
        if (!characterData) {
            return null;
        }

        let deadOrAliveState;
        if (characterData.alive === true){
            deadOrAliveState = 'Alive';
        } else if (characterData.alive === false) {
            deadOrAliveState = 'Dead';
        } else {
            deadOrAliveState = 'Unknown';
        }

        return ( 
            <div className="character-container">
                <h1>{characterData.name}</h1>
                <img src={characterData.image} alt=""/>
                <ul>
                    <li>House: {characterData.house}</li>
                    <li>Birth: {characterData.yearOfBirth}</li>
                    <li>Patronus: {characterData.patronus}</li>
                    <li>{deadOrAliveState}</li>
                </ul>
            </div>
         );
    }
}
 
export default CharacterInfo;