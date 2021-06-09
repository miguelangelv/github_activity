/* eslint-disable no-console */
import {
    FETCH_ALL_ACTIVITIES,
    CREATE_ACTIVITY,
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
    TRACK_ACTIVITY
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getActivities = () => async (dispatch) => {
    try {
        const { data } = await api.fetchActivities();

        dispatch({ type: FETCH_ALL_ACTIVITIES, payload: data });
    } catch (error) {
        console.error(error.message);
    }
};

export const createActivity = (activity) => async (dispatch) => {
    try {
        const { data } = await api.createActivity(activity);

        dispatch({ type: CREATE_ACTIVITY, payload: data.collectedActivity });
    } catch (error) {
        console.error(error.message);
    }
};

export const updateActivity = (id, activity) => async (dispatch) => {
    try {
        const { data } = await api.updateActivity(id, activity);

        dispatch({ type: UPDATE_ACTIVITY, payload: data });
    } catch (error) {
        console.error(error.message);
    }
};

export const deleteActivity = (id) => async (dispatch) => {
    try {
        await api.deleteActivity(id);

        dispatch({ type: DELETE_ACTIVITY, payload: id });
    } catch (error) {
        console.error(error.message);
    }
};

export const trackActivity = (event, data) => {
    return { type: TRACK_ACTIVITY, payload: { event, data } };
};
