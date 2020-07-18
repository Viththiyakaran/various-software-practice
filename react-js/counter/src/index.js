import React from 'react';
import ReactDOM from 'react-dom';
import Abc from './abc';

function Xyz(){
    return(
        <Abc/>
    )
}

ReactDOM.render(<Xyz/>,document.getElementById('root'));