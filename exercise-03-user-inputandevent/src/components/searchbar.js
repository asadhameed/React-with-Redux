import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFromSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFromSubmit}>
          <div className="field">
            <label>Search </label>
            <input
              type="text"
              hint="Search a text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
