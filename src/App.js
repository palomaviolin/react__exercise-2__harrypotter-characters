import React, { Component } from "react";
import "./App.scss";
import { fetchCharacters } from "./components/services/CharactersService";
import Home from "./components/Home";
import CharacterInfo from "./components/CharacterInfo";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      filteredDataBlood: []
    };
    this.fetchCharacterData();
    this.fetchCharacterBlood();
    this.filterCharacterData = this.filterCharacterData.bind(this);
    this.filterCharacterDataBlood = this.filterCharacterDataBlood.bind(this);
  }

  componentDidMount() {
    this.fetchCharacterData();
  }

  fetchCharacterData() {
    fetchCharacters().then(data => {
      let characterData = data.map((characterItem, index) => {
        return {
          id: index + 1,
          ...characterItem
        };
      });
      this.setState({
        data: characterData,
        filteredData: characterData
      });
    });
  }

  fetchCharacterBlood() {
    fetchCharacters().then(data => {
      let characterData = data.map((characterItem, index) => {
        return {
          id: index + 1,
          ...characterItem
        };
      });
      this.setState({
        data: characterData,
        filteredDataBlood: characterData
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

    let filteredData = characterData.filter(characterItem => {
      let characterName = characterItem.name.toLowerCase();
      return characterName.includes(inputName);
    });

    this.setState({
      filteredData
    });
  }

  filterCharacterDataBlood(event) {
    console.log(this.state);
    const inputName = event.target.value;
    if (inputName === "") {
      this.fetchCharacterBlood();
      return;
    }

    const characterData = this.state.data;

    let filteredDataBlood = characterData.filter(characterItem => {
      let characterBlood = characterItem.ancestry.toLowerCase();
      return characterBlood.includes(inputName);
    });

    this.setState({
      filteredDataBlood
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
              filterCharacterBlood={this.filterCharacterDataBlood}
              data={this.state.filteredDataBlood}
            />
          )}
        />
        <Route
          path="/characters/:id"
          render={props => (
            <CharacterInfo
              characters={this.state.filteredDataBlood}
              match={props.match}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
