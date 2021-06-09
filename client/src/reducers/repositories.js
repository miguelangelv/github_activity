import { FETCH_ALL_REPOS, CREATE_REPO, UPDATE_REPO, DELETE_REPO } from '../constants/actionTypes';

const reducer = (repositories = [], action) => {
    switch (action.type) {
        case FETCH_ALL_REPOS:
            return action.payload;
        case CREATE_REPO:
            return [...repositories, action.payload];
        case UPDATE_REPO:
            return repositories.map((repository) => (repository._id === action.payload._id ? action.payload : repository));
        case DELETE_REPO:
            return repositories.filter((repository) => repository._id !== action.payload);
        default:
            return repositories;
    }
};

export default reducer;

