import React, { Component } from 'react';
import './FiltersInput.scss';
import themeSong from '../../music/themeSong.mp3';

class FiltersInput extends Component {
    state = {
        query: '',
      }
     
    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
        console.log(this.state.query);
    }
     
    render() {
        return (
            <header className="header">
                <audio ref="audio_tag" src={themeSong} controls autoPlay/>
                <div className="container--main">
                    <img className="img-decoration" src="https://media.giphy.com/media/2zoIuUJvAa0TbSy1kT/giphy.gif" alt=""/>
                        <div className="container_title-and-input">
                            <h1 className="web-title">Harry Potter characters</h1>
                            <form>
                                <input
                                className="input-styles"
                                placeholder=" Search character..."
                                ref={input => this.search = input}
                                onChange={this.props.filterInput}
                                />
                            </form>
                        </div>
                </div>
            </header>
         );
    }
}
 
export default FiltersInput;