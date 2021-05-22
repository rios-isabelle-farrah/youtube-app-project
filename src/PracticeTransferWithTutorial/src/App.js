import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import "./App.css";
import Berries from "./Components/Berries";
import Video from "./Components/Video";
// import VideoSelect

import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/berries" component={Berries} />
        <Route path="/video" component={Video} />
        <Route path="/locations" component={Locations} />
      </main>

     
    </div>
  );
}

export default App;