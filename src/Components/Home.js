import axios from "axios";

import React from "react";

import { Link } from "react-router-dom";

import "./Home.css"

const Home = (props) => {


  const {input, setInput, videos, setVideos} = props;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${input}&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
    }
    setInput("")
  };



  return (
    <div className="main-div">
      <form className="form-top" onSubmit={handleSubmit}>
        <section className='search-section'>
        <input className="input-top"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Search"
        />
        <button className="button-search" type="submit"><img className="magnify-glass"src="https://i.pinimg.com/originals/95/56/f9/9556f902c9acfa20cea3b161fb9d45ee.png"></img></button>
        </section>
      </form>

      <ul className="image-boxes">
        {videos.map((video) => {
          return (
            <li className="videoItems" key={video.id.videoId} id={video.id.videoId}>
              <Link to={`/searchResult/${video.id.videoId}`} >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt="thumbnail"
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

