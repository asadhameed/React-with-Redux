import React from "react";
import SearchBar from "./searchbar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    // console.log(response.data.results);
    console.log(this);
    this.setState({ images: response.data.results });
    console.log(this.state.images);
    console.log(term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} withguss="hellos" />
        <h1>found: {this.state.images.length} images</h1>
      </div>
    );
  }
}

export default App;
