import ReactPlayer from "react-player";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

import "./ShowVideo.css";

const ShowVideo = ({
  fullName,
  setFullName,
  comment,
  setComment,
  list,
  setList,
}) => {
  const { videoID } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const handleName = (e) => {
    setFullName(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => [...prevList, fullName + ": " + comment]);
    setFullName("");
    setComment("");
  };

  return (
    <div className="player-wrapper">
      <br></br>
      {/* <button onClick={goBack}>Go Back</button> */}
      <button className="previous" onClick={goBack}>
        ❮ Previous
      </button>
      <br></br>
      <ReactPlayer
        className="react-player"
        width='1090px'
         height="910px"
        url={`https://www.youtube.com/watch?v=${videoID}`}
      />
      <br></br>
      <br></br>
<div className="div-comment">
<form onSubmit={handleSubmit}>
        <input className="input-name"
          type="text"
          name="fullName"
          placeholder="your name"
          value={fullName}
          onChange={handleName}
        /><br></br>
        <input className="input-comment"
          type="text"
          name="comment"
          placeholder="Add a public comment"
          value={comment}
          onChange={handleComment}
        />
   <div className="comment-div">
   Cancel
        <button className="button-comment" type="submit">Comment</button>

   </div>
      </form>
      <ul className="ul-comment">
        {list.map((oneComment) => {
          return <li className="li-comment" key={oneComment}>
            <img className="round-avi" src="https://www.pngkey.com/png/full/72-729665_user-avatar-2-circle.png">
            </img>{oneComment}</li>;
        })}
      </ul>
</div>
      {/* <ul>
        {list.map((oneComment) => {
          return <li key={oneComment}>{oneComment}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default ShowVideo;
