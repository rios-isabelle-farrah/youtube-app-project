import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import ShowVideo from "./Components/ShowVideo";
import "./App.css";
import "./Components/NavBar.css";
import "./Components/About.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/searchResult/:videoID"} component={ShowVideo} />
        <Route path={"/about"} component={About} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;