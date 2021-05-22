import React from 'react';

import SearchBar from './Components/SearchBar';
import youtube from './apis/youtube'
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

//import { Route, Switch } from "react-router-dom";
//import NavBar from "./Components/NavBar";
//import About from "./Components/About";
//import Home from "./Components/Home";

//import "./App.css";
//import "./Components/NavBar.css"
//import "./Components/About.css"

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Switch>
//         <Route path={"/about"} component={About} />
//         <Route exact path={"/"} component={Home} />
//       </Switch>
//     </div>
//   );
}

export default App;