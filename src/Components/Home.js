import React, { Component } from "react";

class Home extends Component {
  state = {input:""}
  
  handleInput = (e) => {
    this.setState({input: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

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
