import { FETCH_ALL_GIT_REPOS, FETCH_GIT_REPO, CLEAR_GIT_REPO, REPO_NOT_FOUND } from '../constants/actionTypes';

import * as api from '../api/gitRepositories.js';

export const getGitRepositories = (organization) => async (dispatch) => {
    try {
        const { data } = await api.fetchGitRepositories(organization);

        dispatch({ type: FETCH_ALL_GIT_REPOS, payload: data });
    } catch (error) {
        dispatch({ type: REPO_NOT_FOUND, payload: true });
    }
};

export const getGitRepository = (repository) => async (dispatch) => {
    try {
        const { data } = await api.fetchGitRepositoryComplete(repository);

        dispatch({ type: FETCH_GIT_REPO, payload: data });
    } catch (error) {
        console.error(error.message);
    }
};

export const clearGitRepository = () => (dispatch) => {
    try {
        dispatch({ type: CLEAR_GIT_REPO, payload: {} });
    } catch (error) {
        console.error(error.message);
    }
};