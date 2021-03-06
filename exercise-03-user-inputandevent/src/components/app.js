import React from "react";
import SearchBar from "./searchbar";
import ImageList from "./imageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h1>found: {this.state.images.length} images</h1>
        {<ImageList images={this.state.images} />}
      </div>
    );
  }
}

export default App;
