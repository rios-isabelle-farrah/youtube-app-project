import axios from "axios";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Home = (props) => {
  // const [setInput] = useState("");
  // const [setVideos] = useState([]);

  const {input, setInput, videos, setVideos, setVideoID} = props;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (video) => {
    setVideoID(video.id.videoId);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {videos.map((video) => {
          return (
            <li key={video.id.videoId} id={video.id.videoId}>
              <Link to={`/searchResult/${video.id.videoId}`} handleClick={handleClick}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt="thumbnail"
                />
                <h3>{video.snippet.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

// import axios from "axios";
// import React, { useState } from "react";
// // import ReactPlayer from "react-player";
// // import ShowVideo from "./ShowVideo";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [input, setInput] = useState("");
//   const [videos, setVideos] = useState([]);
//   const [videoID, setVideoID] = useState("");

//   // state = { input: "", videos: [], videoID: "" };

//   const handleInput = (e) => {
//     setInput(e.target.value);
//     // this.setState({ input: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.input}&key=${process.env.REACT_APP_API_KEY}`
//       );
//       setVideos(res.data.items);
//       // this.setState({ videos: res.data.items });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClick = (e) => {
//     setVideoID(e.target.parentElement.id);
//     // this.setState({ videoID: e.target.parentElement.id });
//     // console.log(this.state.videoID);
//   };

//   // const { input, videos, videoID } = this.state;
//   // console.log(this.state);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={handleInput}
//           placeholder="Search"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <Link to={"/searchResults"}>

//       <SearchResults
//             videos={videos}
//             handleClick={this.handleClick}
//             videoID={videoID}
//           />
//       </Link>
//       ${character.id}`}> {character.name}
//       <ShowVideo videoID={videoID} />
//       <ul>
//         {videos.map((video) => {
//           return (
//             <li
//               key={video.id.videoId}
//               onClick={handleClick}
//               id={video.id.videoId}
//             >
//               <Link to={`/searchResults/${video.id.videoId}`}>
//                 {console.log(video.id.videoId)}
//                 <ShowVideo videoID={videoID} />
//                 <img
//                   src={video.snippet.thumbnails.medium.url}
//                   alt="thumbnail"
//                 />
//                 <h3>{video.snippet.title}</h3>
//               </Link>

//               <Link to={`/characters/${character.id}`}> {character.name} </Link>
//             </li>
//           );
//         })}
//         <ReactPlayer
//         controls
//         width="480px"
//         height="240px"
//         url = {`https://www.youtube.com/watch?v=${videoID}`}
//         />
//       </ul>
//     </div>
//   );
// };

// export default Home;
