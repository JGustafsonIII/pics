import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // Using arrow methods automatically binds the variables so we don't end up with an undefined state
  // A similar solution would be to make onSubmit={() => this.onFormSubmit()} since this would bind the state there instead
  // allowing us to use regular functions rather then arrow methods
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
