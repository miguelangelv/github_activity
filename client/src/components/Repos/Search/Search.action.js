import { getGitRepositories } from '../../../actions/gitRepositories';
import { trackActivity } from '../../../actions/activities';

export const SearchRepositories = (organization, event) => async (dispatch) => {
    try {
        dispatch(getGitRepositories(organization));
        dispatch(trackActivity(event, organization));
    } catch (error) {
        console.error(error.message);
    }
};