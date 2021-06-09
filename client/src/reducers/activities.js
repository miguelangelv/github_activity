import { FETCH_ALL_ACTIVITIES, CREATE_ACTIVITY, UPDATE_ACTIVITY, DELETE_ACTIVITY, TRACK_ACTIVITY } from '../constants/actionTypes';

const reducer = (activities = [], action) => {
    switch (action.type) {
        case FETCH_ALL_ACTIVITIES:
            return action.payload;
        case CREATE_ACTIVITY:
            return action.payload;
        case UPDATE_ACTIVITY:
            return activities.map((activity) => (activity._id === action.payload._id ? action.payload : activity));
        case DELETE_ACTIVITY:
            return activities.filter((activity) => activity._id !== action.payload);
        case TRACK_ACTIVITY:
            return [...activities, action.payload];
        default:
            return activities;
    }
};

export default reducer;

