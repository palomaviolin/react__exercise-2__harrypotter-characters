import React, { Component } from 'react';
import './FiltersInput.css';

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
            <header>
                <h1>Harry Potter characters</h1>
                    <form>
                        <input
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