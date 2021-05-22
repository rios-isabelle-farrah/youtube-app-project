const Player = ({ selectedVideo }) => {
    // if (!clicked) {
    //   return <div>
    //      <h1>Enter search keyword to load...</h1>
    //      <br></br>
    //      <p style={{fontSize:'25px'}}>
         
         
  
    //      </p>
    //   </div>;
    // }
  
    const clickedSrc = `https://www.youtube.com/embed/${selectedVideo.id.clickedId}`;
    console.log(typeof clicked);
    return (
      <div>
        <div className="ui embed">
          <iframe src={clickedSrc} allowFullScreen title="Video player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    );
  };
  
  export default Player;