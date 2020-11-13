import React from "react";

// export default function (props) {
//   const [term, setTerm] = useState("");
//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     props.onSearch(term);
//   };

//   return (
//     <div>
//       <form onSubmit={onFormSubmit}>
//         <input onChange={(e) => setTerm(e.target.value)}></input>
//       </form>
//     </div>
//   );
// }

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmitHandel = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmitHandel}>
          <div className="field">
            <label>Videos Search</label>
            <input
              type="text"
              placeholder="Videos"
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
