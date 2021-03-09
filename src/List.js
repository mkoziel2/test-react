import React from 'react';
import './App.css';
import Counter from './Counter'

const List = ({counters, handleDel, handleInc}) => {
    return(
        <div>
            { counters.map( x => (<Counter c={x} counters={counters} handleDel={handleDel} handleInc={handleInc}/>) ) }
        </div>
    )
}

export default List;
