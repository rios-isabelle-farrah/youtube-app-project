import ReactPlayer from "react-player";
import React from "react";

const ShowVideo = (props) => {
  const { videoID } = props.match.params;

  return (
    <div>
      <ReactPlayer
        controls
        width="480px"
        height="240px"
        url={`https://www.youtube.com/watch?v=${videoID}`}
      />
    </div>
  );
};

export default ShowVideo;
