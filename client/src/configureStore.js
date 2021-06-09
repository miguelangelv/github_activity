import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const history = createBrowserHistory();

const configureStore = () => {
    const store = createStore(
        reducers(history),
        compose(applyMiddleware(
            routerMiddleware(history),
            thunk)));

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(reducers(history));
        });
    }

    return store;
};

export default configureStore;