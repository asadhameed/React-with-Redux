import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import YouTube from "../Api/youtube";
class App extends React.Component {
  state = { videos: [] };
  onSearch = async (value) => {
    const response = await YouTube.get("/search", {
      params: {
        q: value,
      },
    });
    if (response.data.items) this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
