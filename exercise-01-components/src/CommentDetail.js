import React from "react";
const CommentDetail = (pros) => {
  console.log(pros);
  const { author } = pros;
  return (
    <div className="ui comment">
      <a href="/" className="avatar">
        <img alt="avatar"></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {author.name}
        </a>
        <div className="metadata">
          <span className="date">{author.date}</span>
        </div>
        <div className="text">{author.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
