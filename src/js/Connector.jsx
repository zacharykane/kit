import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import Router from './Router';

const initialState = {
    name: 'Anon',
};

const store = createStore(reducer, initialState);

const Connector = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default Connector;
