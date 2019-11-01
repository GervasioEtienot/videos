import React from 'react';
import BarraBusqueda from './BarraBusqueda';
import './App.css';
import youtube from '../apis/youtube';
import ListaVideos from './ListaVideos';
import DetalleVideo from './DetalleVideo';

class App extends React.Component{
    state = { videos: [], videoSeleccionado: null }
    
    componentDidMount() {
        this.onTermSubmit('leones');
    }
    
    onTermSubmit = async (term) => {
        const respuesta = await youtube.get('/search',{
            params: {
                q: term
            }
        });
       // console.log(respuesta.data.items);
        this.setState({videos: respuesta.data.items,
                       videoSeleccionado: respuesta.data.items[0] 
        });
    };

    onVideoSeleccionado = (video) => {
        this.setState({ videoSeleccionado: video });
    };

    render(){
        return (
            <div className="General" >
               <div className="ui container" >
                  <BarraBusqueda onBusquedaEnviar={this.onTermSubmit} />
                  <div className="ui grid">
                    <div className="ui row">
                       <div className="eleven wide column">
                          <DetalleVideo video={this.state.videoSeleccionado} />
                       </div>
                       <div className="five wide column">
                          <ListaVideos onVideoSeleccionado={this.onVideoSeleccionado} videos={this.state.videos} />
                       </div> 
                    </div> 
                  </div>
               </div>
            </div>
            
            );
    }
}

export default App;