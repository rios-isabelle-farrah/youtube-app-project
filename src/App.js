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

  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=${process.env.REACT_APP_API_KEY}`
  //     );
  //     setVideos(res.data.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
            setVideoID={setVideoID}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
