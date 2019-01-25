import React, { Component } from "react";
import "./CharacterList.scss";
import CharacterCard from "../CharacterCard";

class CharacterList extends Component {
  render() {
    let charactersData = this.props.data;
    let cards = [];
    Object.keys(charactersData).forEach(key => {
      let characterInfo = charactersData[key];
      cards.push(
        <CharacterCard
          key={key}
          characterId={key}
          characterData={characterInfo}
        />
      );
    });
    return <main className="main">{cards}</main>;
  }
}

export default CharacterList;
