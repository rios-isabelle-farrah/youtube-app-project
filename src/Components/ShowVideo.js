import ReactPlayer from "react-player"
import { Component } from "react";

class ShowVideo extends Component {
  render() {
    const { videoID } = this.props;
    return (
      <div>
        <ReactPlayer
          controls
          width="480px"
          height="240px"
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>
    );
  }
}

export default ShowVideo;
