import React, { Component } from "react";
import "./CharacterList.scss";
import CharacterCard from "../CharacterCard";

class CharacterList extends Component {
  render() {
    let charactersData = this.props.data || [];
    let cards = [];
    charactersData.forEach((characterItem, index) => {
      cards.push(<CharacterCard key={index} characterData={characterItem} />);
    });
    return <main className="main">{cards}</main>;
  }
}

export default CharacterList;
