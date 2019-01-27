import React, { Component } from "react";
import "./CharacterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CharacterCard extends Component {
  showDetailedInfo() {}

  render() {
    let characterData = this.props.characterData;

    let withoutHouse = "Without house";
    if (characterData.house === "") {
      characterData.house = withoutHouse;
    }

    return (
      <Link to={`/characters/${characterData.id}`}>
        <div className="character-container" onClick={this.showDetailedInfo}>
          <h1 className="text-character-name">{characterData.name}</h1>
          <img className="character-img" src={characterData.image} alt="" />
          <h2 className="text-character-house">{characterData.house}</h2>
        </div>
      </Link>
    );
  }
}

CharacterCard.propTypes = {
  characterData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    house: PropTypes.string
  }).isRequired
};

export default CharacterCard;
