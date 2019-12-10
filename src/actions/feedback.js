import {
    FEEDBACK_POST,
    FEEDBACK_POST_FAILURE,
    FEEDBACK_POST_SUCCESS,
    LIST,
    LIST_SUCCESS,
    LIST_FAILURE
} from "./ActionTypes";

import axios from 'axios';

/* FEEDBACK POST */
export function feedbackPostRequest(contents) {
    return (dispatch) => {
        dispatch(feedbackPost());

        return axios.post('api/feedback', { contents } )
            .then((response) => {
                dispatch(feedbackPostSuccess());
            }).catch((error) => {
                dispatch(feedbackPostFailure(error.response.data.code));
            })
    };
}

export function feedbackPost() {
    return {
        type: FEEDBACK_POST
    };
}

export function feedbackPostSuccess() {
    return {
        type: FEEDBACK_POST_SUCCESS
    };
}

export function feedbackPostFailure() {
    return {
        type: FEEDBACK_POST_FAILURE
    };
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' memo or 'new' memo
        - id:        OPTIONAL; memo id (one at the bottom or one at the top)
        - username:  OPTIONAL; find memos of following user
*/
export function feedbackListRequest(isInitial, listType, id, username) {
    return (dispatch) => {
        dispatch(feedbackList());

        let url = '/api/feedback';

        return axios.get(url)
            .then((response) => {
                dispatch(feedbackListSuccess(response.data, isInitial, listType));
            }).catch((error) => {
                dispatch(feedbackListFailure());
            })
    }
}

export function feedbackList() {
    return {
        type: LIST
    }
}

export function feedbackListSuccess(data, isInitial, listType) {
    return {
        type: LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function feedbackListFailure() {
    return {
        type: LIST_FAILURE
    };
}