import { goBack } from 'connected-react-router';

import { trackActivity } from '../../actions/activities';

export const navigateBack = (event, data) => (dispatch) => {
    try {
        dispatch(trackActivity(event, data));
        dispatch(goBack());
    } catch (error) {
        console.error(error.message);
    }
};