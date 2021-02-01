import React, { Component } from "react";
import FiltersInput from "../FiltersInput";
import CharacterList from "../CharacterList";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <FiltersInput filterInput={this.props.filterCharacterData} filterInputBlood={this.props.filterCharacterBlood}/>
        <CharacterList data={this.props.data} />
      </React.Fragment>
    );
  }
}

export default Home;
