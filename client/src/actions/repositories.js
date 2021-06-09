/* eslint-disable no-console */
import { FETCH_ALL_REPOS, CREATE_REPO, UPDATE_REPO, DELETE_REPO } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getRepositories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRepositories();

        dispatch({ type: FETCH_ALL_REPOS, payload: data });
    } catch (error) {
        console.error(error.message);
    }
};

export const createRepository = (repository) => async (dispatch) => {
    try {
        const { data } = await api.createRepository(repository);

        dispatch({ type: CREATE_REPO, payload: data });
    } catch (error) {
        console.error(error.message);
    }
};

export const updateRepository = (id, repository) => async (dispatch) => {
    try {
        const { data } = await api.updateRepository(id, repository);

        dispatch({ type: UPDATE_REPO, payload: data });
    } catch (error) {
        console.error(error.message);
    }
};

export const deleteRepository = (id) => async (dispatch) => {
    try {
        await api.deleteRepository(id);

        dispatch({ type: DELETE_REPO, payload: id });
    } catch (error) {
        console.error(error.message);
    }
};
