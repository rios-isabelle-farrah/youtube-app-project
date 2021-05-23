import ReactPlayer from "react-player";
import React from "react";

import "./ShowVideo.css";

const ShowVideo = (props) => {
  const { videoID } = props.match.params;

  return (
    <div className="showVideo">
      <br></br>
      <button>Go Back **FYI,this does not currently work. We can tackle this on Sunday**</button>
      <br></br>
      <ReactPlayer className="videoDisplay"
        controls
        width="480px"
        height="240px"
        url={`https://www.youtube.com/watch?v=${videoID}`}
      />
    </div>
  );
};

export default ShowVideo;
