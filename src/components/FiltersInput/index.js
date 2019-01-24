import React, { Component } from 'react';
import './FiltersInput.scss';

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
                <h1 className="web-title">Harry Potter characters</h1>
                    <form>
                        <input
                        className="input-styles"
                        placeholder="Search character..."
                        ref={input => this.search = input}
                        onChange={this.props.filterInput}
                        />
                    </form>
            </header>
         );
    }
}
 
export default FiltersInput;