import {
    COURSE_POST,
    COURSE_POST_FAILURE,
    COURSE_POST_SUCCESS,
    LIST,
    LIST_SUCCESS,
    LIST_FAILURE
} from "./ActionTypes";

import axios from 'axios';

/* COURSE POST */
export function coursePostRequest(contents) {
    return (dispatch) => {
        dispatch(coursePost());

        return axios.post('/api/course', { contents } )
            .then((response) => {
                dispatch(coursePostSuccess());
            }).catch((error) => {
                dispatch(coursePostFailure(error.response.data.code));
            })
    };
}

export function coursePost() {
    return {
        type: COURSE_POST
    };
}

export function coursePostSuccess() {
    return {
        type: COURSE_POST_SUCCESS
    };
}

export function coursePostFailure() {
    return {
        type: COURSE_POST_FAILURE
    };
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' memo or 'new' memo
        - id:        OPTIONAL; memo id (one at the bottom or one at the top)
        - username:  OPTIONAL; find memos of following user
*/
export function courseListRequest(isInitial, listType, id, username) {
    return (dispatch) => {
        dispatch(courseList());

        let url = '/api/course';

        return axios.get(url)
            .then((response) => {
                dispatch(courseListSuccess(response.data, isInitial, listType));
            }).catch((error) => {
                dispatch(courseListFailure());
            })
    }
}

export function courseList() {
    return {
        type: LIST
    }
}

export function courseListSuccess(data, isInitial, listType) {
    return {
        type: LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function courseListFailure() {
    return {
        type: LIST_FAILURE
    };
}