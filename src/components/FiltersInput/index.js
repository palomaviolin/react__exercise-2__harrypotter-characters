import React, { Component } from "react";
import "./FiltersInput.scss";
import ThemeSong from "../../music/ThemeSong.mp3";
import titleSmall from "../../images/titleSmall.png";

class FiltersInput extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <header className="header">
        <div className="container--main">
          <img
            className="img-decoration"
            src="https://media.giphy.com/media/2zoIuUJvAa0TbSy1kT/giphy.gif"
            alt=""
          />
          <div className="container_title-and-input">
            <img className="title-website" src={titleSmall} alt="" />
            <form>
              <input
                className="input-styles"
                placeholder=" Search character..."
                ref={input => (this.search = input)}
                onChange={this.props.filterInput}
              />
            </form>
            <audio
              className="audio-box"
              ref="audio_tag"
              src={ThemeSong}
              controls
              autoPlay
            />
          </div>
        </div>
      </header>
    );
  }
}

export default FiltersInput;
