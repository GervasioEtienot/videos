import React from 'react';
import ItemVideo from './ItemVideo';

const ListaVideos = ({videos, onSelectedVideo}) => {
    const listaRenderizada = videos.map((video) => {
        return <ItemVideo key={video.id.videoId} onSelectedVideo={onSelectedVideo} video={video} />;
    });
    
    return (
        
            <div className="ui relaxed divided list"> {listaRenderizada} </div>
            
          );
};


export default ListaVideos;