import axios from "axios";
import React, { Component } from "react";

class Home extends Component {
  state = {input:""}
  
  handleInput = (e) => {
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
  }

  componentDidMount() {
    this.fetchMovies();
  }

    render() {
       const {input} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={input} onChange={this.handleInput} placeholder="Search"/>
            <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Home;
