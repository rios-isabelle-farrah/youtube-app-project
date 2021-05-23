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


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/searchResult/:videoID"}>
          <ShowVideo />
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
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;