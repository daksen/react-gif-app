import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import GifExpertApp from './components/GifExpertApp';

ReactDOM.render( 
    <GifExpertApp defaultCategories={ ["Star Wars"] } />, 
    document.getElementById('root')
);
