import React from 'react';
import './ItemVideo.css'

const ItemVideo = ({ video, onVideoSeleccionado }) => {
    
    return (
        <div className="item-video item" onClick={() => onVideoSeleccionado(video)} >
           <img className="ui image" alt='' src={ video.snippet.thumbnails.medium.url } max-width="180px"/> 
           <div className="content">
               <div className="header">{ video.snippet.title }</div>
           </div> 
        </div>
        );
};

export default ItemVideo;