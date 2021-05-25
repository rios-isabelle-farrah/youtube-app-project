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
      {/* <div className="menu" id="home" to={"/"}><img id="burger" height="80" width="80px" src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-0.jpg"/> </div> */}

      <form className="form-top" onSubmit={handleSubmit}>
      
    <div className="youtube-logo">
      <img  height="50" width="80px" src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"/> 
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



{/* <input type="text" class="rq-form-element" /> */}













          <button className="button-search" type="submit">
            <img
              className="magnify-glass"
              src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png"
            ></img>
          </button>
        </section>
      </form>
{/* <div className="fixed-box"> */}
      <ul className="image-boxes">
        {videos.map((video) => {
          return (
            <li
              className="videoItems"
              key={video.id.videoId}
              id={video.id.videoId}
            >
              <Link to={`/searchResult/${video.id.videoId}`}>
                <img className="thumbnail"
                  src={video.snippet.thumbnails.medium.url}
                  alt="thumbnail"
                />
                <h3 className="video-text">{video.snippet.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </div>




 
  );
};

export default Home;
