import React from 'react';
import ItemVideo from './ItemVideo';

const ListaVideos = ({videos, onVideoSeleccionado}) => {
    const listaRenderizada = videos.map((video) => {
        return <ItemVideo key={video.id.videoId} onVideoSeleccionado={onVideoSeleccionado} video={video} />;
    });
    
    return (
        
            <div className="ui relaxed divided list"> {listaRenderizada} </div>
            
          );
};


export default ListaVideos;