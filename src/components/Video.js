import React from "react";

const Video = ({ video, title }) => {
  return (
    <>
      <iframe
        width="919"
        height="525"
        src={video}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h2 style={{ color: "black" }}>{title}</h2>
    </>
  );
};

export default Video;
