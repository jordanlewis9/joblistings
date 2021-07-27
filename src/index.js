import './public/styles/main.scss';
import './components/listings/images/account.svg';
import './components/listings/images/eyecam-co.svg';
import './components/listings/images/faceit.svg';
import './components/listings/images/insure.svg';
import './components/listings/images/loop-studios.svg';
import './components/listings/images/manage.svg';
import './components/listings/images/myhome.svg';
import './components/listings/images/photosnap.svg';
import './components/listings/images/shortly.svg';
import './components/listings/images/the-air-filter-company.svg';
import './components/listings/images/icon-remove.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { FiltersProvider } from './components/Context';

ReactDOM.render(
    <FiltersProvider>
        <App />
    </FiltersProvider>, 
    document.querySelector('#root'));