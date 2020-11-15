import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  const renderSongDetail = () => {
    if (!song) return <div> Please select song</div>;
    return (
      <div>
        <h3>Song Detail:</h3>
        <p>
          Title: {song.title}
          <br />
          Duration:{song.duration}
        </p>
      </div>
    );
  };
  return <div>{renderSongDetail()}</div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
