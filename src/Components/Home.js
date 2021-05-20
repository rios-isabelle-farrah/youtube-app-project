import axios from "axios";
import React, { Component } from "react";

class Home extends Component {
  state = { input: "", videos: []}
  // id: "", thumbnail: "", title: ""};

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

    // handleSubmit = async(e) => {
    //   e.preventDefault();
    //   // const {videos} = this.state
     
    //   //   this.setState({id: video.id.videoId, thumbnail: video.snippet.thumbnails.medium.url, title: video.title})
      
    // }

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
  
  // componentDidMount() {
  //   this.fetchMovies();
  // }

  render() {
    const { input, videos } = this.state;

     console.log(videos)
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
         return <li key= {video.id.videoId}>
           <img src= {video.snippet.thumbnails.medium.url} alt="thumbnail" />
           <p>{video.snippet.title}</p>
          </li>
        })}
      </ul>
      </div>
    );
  }
}

export default Home;
