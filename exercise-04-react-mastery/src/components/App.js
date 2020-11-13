import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import YouTube from "../Api/youtube";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearch("cars");
  }
  onSearch = async (value) => {
    const response = await YouTube.get("/search", {
      params: {
        q: value,
      },
    });
    if (response.data.items)
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
  };
  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearch} />
        <div className="ui grid">
          <div className="u1 row">
            <div className="eleven wide column">
              <VideoDetail videoDetail={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className=" five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
