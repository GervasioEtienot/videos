import React from 'react';

class BarraBusqueda extends React.Component{
    state = { term: '' };
    
    onInputChange = (event) => {
      this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onBusquedaEnviar(this.state.term);
    };

    render(){

        return( 
            <div className="search-bar ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="ui field">
                     <label>Búsqueda de videos</label>
                     <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                  </div>
               </form>
            </div>
            );
    }
}

export default BarraBusqueda;