import React, { useEffect, useState } from 'react';
import BarraBusqueda from './BarraBusqueda';
import './App.css';
import youtube from '../apis/youtube';
import ListaVideos from './ListaVideos';
import DetalleVideo from './DetalleVideo';

const App = () => {
    // state = { videos: [], videoSeleccionado: null }
    const [ state, setState] = useState({
        videos: [],
        selectedVideo: null
    });

    const { videos, selectedVideo } = state;
    useEffect(() => {
        onTermSubmit('leones');
    },[]);
    
    const onTermSubmit = async (term) => {
        const respuesta = await youtube.get('/search',{
            params: {
                q: term
            }
        });
       // console.log(respuesta.data.items);
        setState({ 
            ...state, 
            videos: respuesta.data.items,
            selectedVideo: respuesta.data.items[0]
        } 
        );
    };

    const onSelectedVideo = (video) => {
        setState({ ...state, selectedVideo: video });
    };
    
    return (
        <div className="General" >
            <div className="ui container" >
                <BarraBusqueda onTermSubmit={onTermSubmit} />
                <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <DetalleVideo video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <ListaVideos onSelectedVideo={onSelectedVideo} videos={videos} />
                    </div> 
                </div> 
                </div>
            </div>
        </div>
        
        );
    
}

export default App;