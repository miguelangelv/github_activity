import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import repositories from './repositories';
import activities from './activities';
import { gitRepositories, gitRepository, gitRepositoryNotFound } from './gitRepositories';

const reducers = (history) => combineReducers({
    router: connectRouter(history),
    repositories,
    activities,
    gitRepositories,
    gitRepository,
    gitRepositoryNotFound
});

export default reducers;
