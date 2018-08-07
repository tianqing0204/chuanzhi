import React from 'react';
import reactDom from 'react-dom';
import Home from './views/home';
import {Provider} from 'react-redux';
import store from '../store';
reactDom.render(<Provider store={store}><Home></Home></Provider>, document.getElementById('root'));
