import ReactPlayer from "react-player";
import React from "react";
import { useHistory, useParams } from 'react-router-dom'


import "./ShowVideo.css";

const ShowVideo = ({
  fullName, 
  setFullName,
  comment,
  setComment,
  list,
  setList
}) => {
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





    
    <div className='player-wrapper'>



      <br></br>
      {/* <button onClick={goBack}>Go Back</button> */}
      <button className="previous" onClick={goBack}>


❮ Previous



</button>
      <br></br>
      <ReactPlayer 
                className='react-player'
          width='800px'
          height='910px'
            
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
          onChange={handleName}
        />
        <input
          type="text"
          name="comment"
          placeholder="your comment"
          value={comment}
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
