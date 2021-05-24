import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import ShowVideo from "./Components/ShowVideo";
import "./App.css";
import "./Components/NavBar.css";
import "./Components/About.css";
import { useState } from "react";


const App = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [fullName, setFullName] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="App">
         <NavBar className="nav-bar" />
      <Switch>
        <Route path={"/searchResult/:videoID"}>
          <ShowVideo
          fullName={fullName}
          setFullName={setFullName}
          comment={comment}
          setComment={setComment}
          list={list}
          setList={setList} />
        </Route>
        <Route path={"/about"} >
         <About />
         </Route>
        <Route exact path={"/"}>
          <Home className="home-top-header"
            input={input}
            setInput={setInput}
            videos={videos}
            setVideos={setVideos}
          />
        </Route>
      </Switch>
      {/* <NavBar className="nav-bar" /> */}
    </div>
  );
};

export default App;