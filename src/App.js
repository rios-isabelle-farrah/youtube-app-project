import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import ShowVideo from "./Components/ShowVideo";
import "./App.css";
import "./Components/NavBar.css";
import "./Components/About.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoID, setVideoID] = useState("");
  const [fullName, setFullName] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/searchResult/:videoID"}>
          <ShowVideo 
          fullName={fullName}
          setFullName={setFullName}
          comment={comment}
          setComment={setComment}
          list={list}
          setList={setList}/>
        </Route>
        <Route path={"/about"} >
         <About />
         </Route>
        <Route exact path={"/"}>
          <Home
            input={input}
            setInput={setInput}
            videos={videos}
            setVideos={setVideos}
            setVideoID={setVideoID}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
