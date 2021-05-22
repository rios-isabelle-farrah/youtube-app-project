import axios from "axios";
import React, { Component } from "react";
import ReactPlayer from "react-player"

class Home extends Component {
  state = { input: "", videos: [], videoID: ""}

  handleInput = (e) => {
<<<<<<< HEAD:src/Components/AppOne/Home.js
    this.setState({input: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  }

  fetchMovies = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY }`)
      debugger
    } catch (error) {
      console.log(error)
    }
=======
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.input}&key=${process.env.REACT_APP_API_KEY}`
      );
    this.setState({videos: res.data.items})
    } catch (error) {
      console.log(error);
    }
  };
  
  handleClick = (e) => {
    // const videoIdValue= (e.target).next()
    this.setState({videoID: e.target.parentElement.id})
    
>>>>>>> 0b2e1243df4312aaeea5108357e99f1f326db7ad:src/Components/Home.js
  }
  // componentDidMount() {
  //   this.fetchMovies();
  // }

<<<<<<< HEAD:src/Components/AppOne/Home.js
  componentDidMount() {
    this.fetchMovies();
  }

    render() {
       const {input} = this.state;
=======
  render() {
    const { input, videos, videoID } = this.state;
    console.log(this.state)
>>>>>>> 0b2e1243df4312aaeea5108357e99f1f326db7ad:src/Components/Home.js
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={this.handleInput}
            placeholder="Search"
          />
          <button type="submit">Search</button>  
        </form>
      <ul>
        {videos.map(video=>{
         return <li key= {video.id.videoId} onClick={this.handleClick} id={video.id.videoId}>
           {console.log(video.id.videoId)}
       
           {/* <section> */}
           {/* <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} > */}
           <img src= {video.snippet.thumbnails.medium.url} alt="thumbnail" />
           <h3>{video.snippet.title}</h3>
           {/* </section> */}
           {/* </a> */}
           <br></br>
          </li>
        })}
        <ReactPlayer 
        controls
        width="480px"
        height="240px"
        url = {`https://www.youtube.com/watch?v=${videoID}`}
        />
      </ul>

      </div>
    );
  }
}

export default Home;
