import React, { useState } from 'react';

const BarraBusqueda = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = ({ target }) => {
      setTerm( target.value );
    };

    const onFormSubmit = event => {
        event.preventDefault();
        onTermSubmit(term);
    };

    return( 
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="ui field">
                    <label>Búsqueda de videos</label>
                    <input type="text"
                        value={term}
                        onChange={onInputChange} />
                </div>
            </form>
        </div>
        );
}

export default BarraBusqueda;