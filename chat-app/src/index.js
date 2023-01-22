import React, { useSyncExternalStore } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './components/reduxToolkit/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = () => root.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
);

rerender();
store.subscribe(rerender);