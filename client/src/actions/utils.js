import { push } from 'connected-react-router';
import { CLOSE_MODAL } from '../constants/actionTypes';
import { trackActivity } from './activities';

export const navigate = (path) => (dispatch) => {
    dispatch(push(path));
};

export const resetNotFound = () => (dispatch) => {
    dispatch({ type: CLOSE_MODAL, payload: false });
}

export const navigateTo = (event, path) => (dispatch) => {
    dispatch(navigate(path));
    dispatch(trackActivity(event, path));
};