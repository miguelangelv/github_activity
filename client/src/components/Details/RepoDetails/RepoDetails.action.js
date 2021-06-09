
import { createRepository } from '../../../actions/repositories';
import { trackActivity, createActivity } from '../../../actions/activities';

export const trackRepository = (gitRepository, event, activities) => async (dispatch) => {
    try {
        dispatch(trackActivity(event, gitRepository.fullName));
        const activity = {
            action: event,
            data: gitRepository.fullName
        };
        dispatch(createActivity([...activities, activity]));
        dispatch(createRepository(gitRepository));
    } catch (error) {
        console.error(error.message);
    }
};