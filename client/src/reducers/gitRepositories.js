import { FETCH_ALL_GIT_REPOS, FETCH_GIT_REPO, CLEAR_GIT_REPO, REPO_NOT_FOUND, CLOSE_MODAL } from '../constants/actionTypes';

export const gitRepositories = (gitRepositories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_GIT_REPOS:
            return action.payload;
        default:
            return gitRepositories;
    }
};

export const gitRepository = (gitRepository = {}, action) => {
    switch (action.type) {
        case FETCH_GIT_REPO:
            return action.payload;
        case CLEAR_GIT_REPO:
            return action.payload;
        default:
            return gitRepository;
    }
};

export const gitRepositoryNotFound = (notFound = false, action) => {
    switch (action.type) {
        case REPO_NOT_FOUND:
            return action.payload;
        case CLOSE_MODAL:
            return action.payload;
        default:
            return notFound;
    }
};

