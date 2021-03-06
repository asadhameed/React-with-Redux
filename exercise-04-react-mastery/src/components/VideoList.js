import React from "react";

import VideoItem from "./VideoItem";
const videoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default videoList;
