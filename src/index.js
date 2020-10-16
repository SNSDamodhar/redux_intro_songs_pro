import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';


//we should create a store and should give that store reference to provider
//provider gives required access to store for any component 
//so if component wants to get props from store it should implement connect function to connect with provider and get required props from the store
//provider lies on the top of the application after that app will lies
ReactDOM.render(
    <Provider store = {createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);