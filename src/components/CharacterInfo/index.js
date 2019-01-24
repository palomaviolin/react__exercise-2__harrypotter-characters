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
            deadOrAliveState = 'Dead 💀';
        } else {
            deadOrAliveState = 'Unknown';
        }

        let houseShield;
        if (characterData.house === 'Gryffindor'){
            houseShield = 'http://www.ruths-study.com/movies/harry-potter/gshield.jpg';
        } else if (characterData.house === 'Ravenclaw') {
            houseShield = 'https://musingsfromnevillesnavel.files.wordpress.com/2011/08/ravenclaw-shield1.jpg';
        } else if (characterData.house === 'Slytherin') {
            houseShield = 'http://www.ruths-study.com/movies/harry-potter/sshield.jpg';
        } else if (characterData.house === 'Hufflepuff') {
            houseShield = 'http://www.ruths-study.com/movies/harry-potter/hshield.jpg';
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
                    </ul>
                </div>
                <img className="shield-image" src={houseShield} alt=""/>
            </div>
         );
    }
}
 
export default CharacterInfo;