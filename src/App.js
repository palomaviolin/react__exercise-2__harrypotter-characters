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
      filteredData: []
    };
    this.fetchCharacterData();
    this.filterCharacterData = this.filterCharacterData.bind(this);
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
