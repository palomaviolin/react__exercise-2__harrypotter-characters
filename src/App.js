import React, { Component } from "react";
import "./App.scss";
import { fetchCharacters } from "./components/services/CharactersService";
import uniqueId from "lodash.uniqueid";
import Home from "./components/Home";
import CharacterInfo from "./components/CharacterInfo";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      filteredData: {}
    };
    this.fetchCharacterData();
    this.filterCharacterData = this.filterCharacterData.bind(this);
  }

  componentDidMount() {
    this.fetchCharacterData();
  }

  fetchCharacterData() {
    fetchCharacters().then(data => {
      let charactersObject = {};
      for (const characterData of data) {
        let characterId = uniqueId();
        charactersObject[characterId] = characterData;
      }
      this.setState({
        data: charactersObject,
        filteredData: charactersObject
      });
    });
  }

  filterCharacterData(event) {
    const inputName = event.target.value;
    if (inputName === "") {
      this.fetchCharacterData();
      return;
    }

    const characterData = this.state.data;

    let filteredData = {};
    Object.keys(characterData).forEach(key => {
      let characterInfo = characterData[key];
      let characterName = (characterInfo.name || "").toLowerCase();
      if (characterName.includes(inputName)) {
        filteredData[key] = characterInfo;
      }
    });

    this.setState({
      filteredData
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              filterCharacterData={this.filterCharacterData}
              data={this.state.filteredData}
            />
          )}
        />
        <Route
          path="/characters/:id"
          render={props => (
            <CharacterInfo
              characters={this.state.filteredData}
              match={props.match}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
