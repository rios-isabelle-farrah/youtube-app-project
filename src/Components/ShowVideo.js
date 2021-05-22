import ReactPlayer from "react-player"
import { Component } from "react";

class ShowVideo extends Component {
  render() {
    const { videoID } = this.props.match.params;
    
    return (
      <div>
        <ReactPlayer
          controls
          width="480px"
          height="240px"
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>
    );
  }
}

export default ShowVideo;

// import { useState, useEffect } from "react";
// import { useParams, useHistory } from 'react-router-dom';
// import axios from "axios";

// const Player = (props) => {
//   const [video, setVideo] = useState({});
//   const { id } = useParams();
//   const history = useHistory();
// // console.log(id)
// // console.log(props)
//   useEffect(() => {
//     fetchvideo();
//   }, [id]);
//   const fetchvideo = async () => {
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${REACT_APP_API_KEY}`
//       );
//       setVideo(res.data);
//     } catch (err) {
//       console.log(err);
//       setVideo({});
//     }
//   };
//   const goBack = () => {
//     history.goBack();
//   };
//   const goToUser2 = () => {
//       history.push("/videos/2")
//   }
//   const seeDogs = () => {
//     history.push("/player");
//   };
//   const { name, image} = video;
//   console.log(video)
//   const videoSrc = `https://www.youtube.com/embed/${video}`;
//   return (
//     <section>
//       {props.myName}
//       <button onClick={goBack}>Back Button</button>
//       <button onClick={seeDogs}>See dogs</button>
//       <button onClick={goToUser2}>See User 2</button>
//       <h1>Display Single video</h1>
//       {/* Name: {name} */}
//       {/* <img src={image} alt="video pic" /> */}
//       {/* <iframe   src={video} allowFullScreen title="Video player"    width="500px" hight="700px"/>        */}
//     </section>
//   );
// };
// export default Player;
