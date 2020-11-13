import React from "react";

import VideoItem from "./VideoItem";
const videoList = ({ videos }) => {
  const renderList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video}></VideoItem>;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default videoList;
