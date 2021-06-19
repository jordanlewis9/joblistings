import './public/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FiltersProvider } from './components/Context';

ReactDOM.render(
    <FiltersProvider>
        <App />
    </FiltersProvider>, 
    document.querySelector('#root'));