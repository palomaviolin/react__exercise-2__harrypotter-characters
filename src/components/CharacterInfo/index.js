import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CharacterInfo.scss";
import gryffindorShield from "../../images/gryffindorShield.png";
import ravenclawShield from "../../images/ravenclawShield.png";
import slytherinShield from "../../images/slytherinShield.png";
import hufflepuffShield from "../../images/hufflepuffShield.png";
import DoubleTroubleSong from "../../music/DoubleTroubleSong.mp3";
import PropTypes from "prop-types";

class CharacterInfo extends Component {
  render() {
    let characters = this.props.characters;
    let targetCharacterId = parseInt(this.props.match.params.id) || 0;

    let characterData = characters.find(characterItem => {
      return characterItem.id === targetCharacterId;
    });
    if (!characterData) {
      return null;
    }

    let deadOrAliveState;
    if (characterData.alive === true) {
      deadOrAliveState = "Alive";
    } else if (characterData.alive === false) {
      deadOrAliveState = "Dead 💀";
    } else {
      deadOrAliveState = "Unknown";
    }

    let houseShield;
    let withoutHouse = "Without house";
    if (characterData.house === "Gryffindor") {
      houseShield = gryffindorShield;
    } else if (characterData.house === "Ravenclaw") {
      houseShield = ravenclawShield;
    } else if (characterData.house === "Slytherin") {
      houseShield = slytherinShield;
    } else if (characterData.house === "Hufflepuff") {
      houseShield = hufflepuffShield;
    } else if (characterData.house === "") {
      houseShield = "";
      characterData.house = withoutHouse;
    }

    const houseShieldElem = houseShield ? (
      <img className="shield-image" src={houseShield} alt="" />
    ) : null;

    const patronusElement = characterData.patronus ? (
      <li className="character-info-li">Patronus: {characterData.patronus}</li>
    ) : null;

    const birthElement = characterData.yearOfBirth ? (
      <li className="character-info-li">Birth: {characterData.yearOfBirth}</li>
    ) : (
      <li className="character-info-li">Birth: Unknown</li>
    );

    return (
      <div className="principal-container-with-shield">
        <div className="character-container-info">
          <audio
            className="audio-box-info"
            ref="audio_tag"
            src={DoubleTroubleSong}
            controls
            autoPlay
          />
          <h1>{characterData.name}</h1>
          <img className="character-img" src={characterData.image} alt="" />
          <ul>
            <li className="character-info-li">House: {characterData.house}</li>
            {birthElement}
            {patronusElement}
            <li className="character-info-li">{deadOrAliveState}</li>
            {houseShieldElem}
          </ul>
          <Link to="/">
            <button className="button-return">Return</button>
          </Link>
        </div>
      </div>
    );
  }
}

CharacterInfo.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    house: PropTypes.string,
    patronus: PropTypes.string,
    alive: PropTypes.bool
  })).isRequired
};

export default CharacterInfo;
