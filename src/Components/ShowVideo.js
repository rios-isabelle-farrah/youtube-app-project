import ReactPlayer from "react-player";
import React from "react";
import { useHistory, useParams } from 'react-router-dom'


import "./ShowVideo.css";

const ShowVideo = (props) => {
  const { videoID } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }


  return (
    <div className="showVideo">
      <br></br>
      <button onClick={goBack}>Go Back</button>
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
