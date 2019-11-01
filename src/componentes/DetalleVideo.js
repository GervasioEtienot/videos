import React from 'react';

const DetalleVideo = ({ video }) => {
    if(!video){
        return <div>Cargando...</div>;
    }
    
    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`
    
    return( 
        <div> 
           <div className="ui embed" >
              <iframe src={videoSrc} title='Video seleccionado' />
           </div>
           <div className="ui segment" >    
              <h4 className="ui header"> {video.snippet.title} </h4>
              <p>{video.snippet.description}</p>
           </div>
        </div>
        );
};


export default DetalleVideo;