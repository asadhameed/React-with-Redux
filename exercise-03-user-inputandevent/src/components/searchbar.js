import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit(event) {
    event.preventDefault();
    /*******
     * console.log(this.state.term)
     * the upper console log look correct but this give an error
     * TypeError: Cannot read property 'state' of undefined
     * In react you can always face such error
     * SO understand the two concept here
     * 1) what is 'this' used for in a class?
     * 2) how is the value of 'this' determined in a function
     *
     * how can solve this problem
     * constructor way
     * arrow function
     * call then function inside in element as arrow function
     * onSubmit={this.onFromSubmit} change to onSubmit={(e)=>this.onFormSubmit(e)}
     */
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
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
