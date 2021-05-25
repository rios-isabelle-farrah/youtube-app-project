import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const { input, setInput, videos, setVideos } = props;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=9&q=${input}&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  return (
    <div className="main-div">
      <form className="form-top" onSubmit={handleSubmit}>
        <div className="youtube-logo">
          <img alt="youtube logo"
            height="50"
            width="80px"
            src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
          />
          Youtube
        </div>
        <section className="search-section">
          <input
            className="input-top"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Search"
          />
          <i></i>

          <button className="button-search" type="submit" alt="button to search for videos">
            <img alt="search icon in search bar"
              className="magnify-glass"
              src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png"
            ></img>
          </button>
        </section>
      </form>
  
      <ul className="image-boxes">
        {videos.map((video) => {
          return (
            <li
              className="videoItems"
              key={video.id.videoId}
              id={video.id.videoId}
            >
              <Link to={`/searchResult/${video.id.videoId}`}>
                <img 
                  className="thumbnail"
                  src={video.snippet.thumbnails.medium.url}
                  alt="thumbnail of video"
                />
                <h3 className="video-text">{video.snippet.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
