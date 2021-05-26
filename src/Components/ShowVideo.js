import ReactPlayer from "react-player";
import { useState } from "react";

import { useHistory, useParams } from "react-router-dom";

import "./ShowVideo.css";
const ShowVideo = () =>
  //   fullName,
  //   setFullName,
  //   comment,
  //   setComment,
  //   list,
  //   setList,
  {
    const [fullName, setFullName] = useState("");
    const [comment, setComment] = useState("");
    const [list, setList] = useState([]);
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

    const handleCancel=()=>{
      setFullName("")
      setComment("")
    }

    return (
      <div className="main-show">
        <br></br>
        {/* <button onClick={goBack}>Go Back</button> */}
        <button
          className="previous"
          onClick={goBack}
          alt="button to go to previous page"
        >
          ❮ Previous
        </button>
        <br></br>
        <div className="player-wrapper">
        <ReactPlayer
              className="react-player"
              playing
              width="90%"
              height="90%"
              controls={false}
          
          // className="react-player"
          // width="1090px"
          // height="910px"
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
        </div>
        <br></br>
        <br></br>
        <div className="div-comment">
          <form onSubmit={handleSubmit}>
            <input
              className="input-name"
              type="text"
              name="fullName"
              placeholder="your name"
              value={fullName}
              onChange={handleName}
              required
            />
            <br></br>
            <input
              className="input-comment"
              type="text"
              name="comment"
              placeholder="Add a public comment"
              value={comment}
              onChange={handleComment}
              required
            />
            <div className="comment-div">
            <button
                className="button-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="button-comment"
                type="submit"
                alt="button to comment"
              >
                Comment
              </button>
            </div>
          </form>
          <ul className="ul-comment">
            {list.map((oneComment) => {
              return (
                <li className="li-comment" key={oneComment}>
                  <img
                    className="round-avi"
                    src="https://www.pngkey.com/png/full/72-729665_user-avatar-2-circle.png"
                    alt="tiny anonynous avatar"
                  ></img>
                  {oneComment}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

export default ShowVideo;
