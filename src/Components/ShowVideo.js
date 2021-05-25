import ReactPlayer from "react-player";
import React from "react";
import {useState} from "react"
import { useHistory, useParams } from 'react-router-dom'


import "./ShowVideo.css";

const ShowVideo = () => {

  const [fullName, setFullName] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);

  const { videoID } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

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
<br></br>
<br></br>
<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="your name"
          value={fullName}
          required
          onChange={handleName}
        />
        <input
          type="text"
          name="comment"
          placeholder="your comment"
          value={comment}
          required
          onChange={handleComment}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map((oneComment) => {
          return <li key={oneComment}>{oneComment}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShowVideo;
