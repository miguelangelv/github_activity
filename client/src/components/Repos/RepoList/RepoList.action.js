import { clearGitRepository, getGitRepository } from '../../../actions/gitRepositories';
import { navigateTo } from '../../../actions/utils';

export const selectRepository = (name, event, path) => async (dispatch) => {
    try {
        dispatch(clearGitRepository());
        dispatch(getGitRepository(name));
        dispatch(navigateTo(event, path));
    } catch (error) {
        console.error(error.message);
    }
};