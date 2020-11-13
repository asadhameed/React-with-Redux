import React from "react";

const VideoDetail = ({ videoDetail }) => {
  if (!videoDetail) {
    return <div> Loading</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${videoDetail.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player"></iframe>
      </div>
      <div className="ui segment ">
        <div className="ui header">{videoDetail.snippet.title}</div>
        <p>{videoDetail.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
