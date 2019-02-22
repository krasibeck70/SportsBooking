import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import { store } from './_helpers';
import { App } from './App'
import { Navbar } from './Components/Navbar';


// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('app') 
);