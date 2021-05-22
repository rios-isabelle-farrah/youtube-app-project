import React from 'react';


const VideoImages = ({oneVideo,selectVideo})=> {

console.log(oneVideo.id.videoId)

    return (
        <div onClick={ () => selectVideo(oneVideo)} >
            <img src={oneVideo.snippet.thumbnails.medium.url} alt={oneVideo.snippet.description}/>
            <div className='content'>
                <div className='header '>{oneVideo.snippet.title}</div>
            </div>
        </div>
    )

    // constructor(props) {
    //     super(props)
        // console.log("VideoImages Constructor")
    // }

    // render() {
        // debugger
        // const { id,title,channel,image, selectVideo } = this.props; 
       // const idString = id 
        // const videoSrc = `https://www.youtube.com/embed/${id}`
        // return <img src={url} alt="VideoImages Pic" style={styles.img}/>
        // return (
        //     <div onClick={selectVideo} value={videoSrc} name={videoSrc}>
          
{/* <img src={image}  name={videoSrc}/> */}
{/* video.snippet.thumbnails.medium.url */}
{/* <h2>{channel}</h2>
<h2>{title}</h2> */}

{/*https://stackoverflow.com/questions/22671582/what-is-the-purpose-of-double-curly-braces-in-reacts-jsx-syntax */}


            {/* </div>
        )
    }
} */}
}

//https://i.ytimg/vi/${props.videoId}/maxresdefault.jpg
export default VideoImages; 