import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore, { history } from './configureStore';
import './index.css';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        document.getElementById('root'),
    );
}


render()

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })
}
