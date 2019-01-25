import React, { Component } from 'react';
import './CharacterInfo.scss';
import gryffindorShield from '../../images/gryffindorShield.png';
import ravenclawShield from '../../images/ravenclawShield.png';
import slytherinShield from '../../images/slytherinShield.png';
import hufflepuffShield from '../../images/hufflepuffShield.png';

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
            deadOrAliveState = 'Dead 💀';
        } else {
            deadOrAliveState = 'Unknown';
        }

        let houseShield;
        if (characterData.house === 'Gryffindor'){
            houseShield = gryffindorShield;
        } else if (characterData.house === 'Ravenclaw') {
            houseShield = ravenclawShield;
        } else if (characterData.house === 'Slytherin') {
            houseShield = slytherinShield;
        } else if (characterData.house === 'Hufflepuff') {
            houseShield = hufflepuffShield;
        } else {
            houseShield ='';
        }

        return ( 
            <div className="principal-container-with-shield">
                <div className="character-container-info">
                    <h1>{characterData.name}</h1>
                    <img className="character-img" src={characterData.image} alt=""/>
                    <ul>
                        <li className="character-info-li">House: {characterData.house}</li>
                        <li className="character-info-li">Birth: {characterData.yearOfBirth}</li>
                        <li className="character-info-li">Patronus: {characterData.patronus}</li>
                        <li className="character-info-li">{deadOrAliveState}</li>
                        <img className="shield-image" src={houseShield} alt=""/>
                    </ul>
                </div>
                {/* <img className="shield-image" src={houseShield} alt=""/> */}
            </div>
         );
    }
}

export default CharacterInfo;