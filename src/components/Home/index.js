import React, { Component } from 'react';
import FiltersInput from '../FiltersInput';
import CharacterList from '../CharacterList';
import './Home.scss';

class Home extends Component {
    render() { 
        console.log('HOME', this.props)
        return (
            <React.Fragment>
                <FiltersInput filterInput={this.props.filterCharacterData} />
                <CharacterList data={this.props.data} />
            </React.Fragment>
        );
    }
}
 
export default Home;