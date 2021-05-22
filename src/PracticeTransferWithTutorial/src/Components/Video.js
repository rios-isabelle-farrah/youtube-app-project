import { Component } from "react";
import axios from "axios";
 import VideoImages from './VideoImages'
 import Player from './Player'

class Video extends Component {
  state = { input: "", videoArray: [], hasSearched: false , selectedVideo: {}, videoIDToPlay:"", clicked: false};

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({hasSearched: true})
    try {
      const { input } = this.state;
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=AIzaSyBk30icjH6HwROjrDu_3c2-nF61tebjJGg`);
  //  console.log(res.data.items)
  //  console.log(res.data)
      this.setState({ video: res.data.items });
    } catch (err) {
      this.setState({ video: {} });
    }

    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };


  selectVideo = (video)=> {
  
    // this.setState({ videoIDToPlay: e.target.value });
    // console.log(e.target)
    this.setState({ clicked: true, selectedVideo: video});
    // videoIDToPlay: e.target.name,

    console.log(this.state)
    // console.log(e.target.value)
    // debugger
    // try {
    //   const res = await axios.get(e.target.value);
    //   this.setState({ selectedVideo: res.data });
    // } catch (error) {
    //   this.setState({ selectedVideo: {} });
    // }
  };






  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  // console.log(typeof video);

  render() {
    const { input, videoArray, clicked} = this.state;

    // if (!video) {
    //   return <div>
    //      <h1>Enter search keyword to load...</h1>
    //      <br></br>
    //      <p style={{fontSize:'25px'}}>
         
         
  
    //      </p>
    //   </div>;
    // }
  
    if (!clicked) {
      return (
        <section>
          <h1>Search for a video</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={this.handleChange}
              placeholder={"Find Your video"}
            />
            <button type="submit">Submit</button>
          </form>
          {/* access data from fetch and pass to child called VideoImages similar to dog App */}
   
   
       
          <h1>VideoImages</h1>
          {videoArray.map(item => {
              return <VideoImages oneVideo={item} selectVideo={this.selectVideo}id={item.id.videoId} key={item.id.videoId} 
              title={item.snippet.title} channel={item.snippet.channelTitle}
              //a href={`https://www.youtube.com/watch?v=${item.id.videoId}
              item={item.snippet.thumbnails.medium.url}/>
          })}
  









        </section>
      );
  }


    // item of video is uri=`https://i.ytimg/vi/${props.videoId}/maxresdefault.jpg`
    // return (
    //   <section>
    //     <h1>Search for a video</h1>
    //     <form onSubmit={this.handleSubmit}>
    //       <input
    //         type="text"
    //         value={input}
    //         onChange={this.handleChange}
    //         placeholder={"Find Your video"}
    //       />
    //       <button type="submit">Submit</button>
    //     </form>
    //     {/* access data from fetch and pass to child called Videoitems similar to dog App */}
 
 
     
    //     <h1>Videoitems</h1>
    //     {video.map(item => {
    //         return <Videoitems selectVideo={this.selectVideo}id={image.id.videoId} key={image.id.videoId} 
    //         title={image.snippet.title} channel={image.snippet.channelTitle}
    //         image={image.snippet.thumbnails.medium.url}/>
    //     })}

    //   </section>
    // );



//  const videoSrc = `https://www.youtube.com/embed/${videoIDToPlay}`;
    // const videoSrc = videoIDToPlay
    // console.log(typeof video);
    // console.log(videoSrc);
    return (
      <div>
        <Player selectedVideo={this.state.selectedVideo}/>
        {/* <div className="ui embed"> */}
          {/* <iframe src={videoSrc} allowFullScreen title="Video player" />
        </div>
        <div className="ui segment"> */}
          {/* <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p> */}
        {/* </div> */}
      </div>
    );

  }
}
//imagae.id.videoId:
//image.snippet.title
//image.snippet.channelTitle
export default Video;






























// import { Component } from "react";
// import axios from "axios";

// class Pokemon extends Component {
//   state = { input: "", pokemon: {}, hasSearched: false };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({hasSearched: true})
//     try {
//       const { input } = this.state;
//       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
//       this.setState({ pokemon: res.data });
//     } catch (err) {
//       this.setState({ pokemon: {} });
//     }

//     this.setState({ input: "" });
//   };

//   handleChange = (e) => {
//     this.setState({ input: e.target.value });
//   };
//   render() {
//     const { input, pokemon, hasSearched } = this.state;

//     let text; 
//     if(hasSearched) {
//         if(pokemon.name) {
//             text = (
//               <div>
//                 <p>Name: {pokemon.name}</p>
//                 <img src={pokemon.sprites?.front_default} />
//                 <p>ID {pokemon.id}</p>
//               </div>
//             );
//         } else {
//             text = <div>Pokemon not found!</div>;
//         }
//     } else {
//         text = null; 
//     }
//     return (
//       <section>
//         <h1>Search for a Pokemon</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={input}
//             onChange={this.handleChange}
//             placeholder={"Find Your Pokemon"}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         {text}
//       </section>
//     );
//   }
// }

// export default Pokemon;




// state = { imageURLs: [] };

// fetchDogImages = async () => {
//   try {
//     const { breed } = this.props;
//     const res = await axios.get(
//       `https://dog.ceo/api/breed/${breed}/images/random/5`
//     );
//     this.setState({imageURLs: res.data.message});
//   } catch (error) {
//     console.log(error);
//     this.setState({ imageURLs: [] });
//   }
// };