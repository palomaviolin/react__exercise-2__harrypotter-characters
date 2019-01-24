import React, { Component } from 'react';
import './CharacterList.scss';
import CharacterCard from '../CharacterCard';

class CharacterList extends Component {
    render() { 
        console.log(this.props.data);
        let charactersData = this.props.data;
        console.log('charactersdata', charactersData)
        let cards = [];
        Object.keys(charactersData).forEach(key => {
            console.log('KEY', key);
            let characterInfo = charactersData[key]; 
            cards.push(<CharacterCard key={key} characterId={key} characterData={characterInfo} />)
        })
        return ( 
            <main className="main">
                {cards}
            </main>
         );
    }
}
 
export default CharacterList;
