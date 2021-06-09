import { goBack } from 'connected-react-router';

import { clearGitRepository } from '../../actions/gitRepositories';
import { trackActivity } from '../../actions/activities';

export const navigateBack = (event, data) => async (dispatch) => {
    try {
        dispatch(clearGitRepository());
        dispatch(trackActivity(event, data));
        dispatch(goBack());
    } catch (error) {
        console.error(error.message);
    }
};