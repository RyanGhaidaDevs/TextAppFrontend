import React from 'react';
import './index.css';
import Root from './components/Root';
import { render } from 'react-dom'
import { createStore } from 'redux'

const store = createStore(rootReducer)

render(<Root store={store} />, document.getElementById('root'))

