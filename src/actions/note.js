import {
    NOTE_POST,
    NOTE_POST_FAILURE,
    NOTE_POST_SUCCESS,
    LIST,
    LIST_SUCCESS,
    LIST_FAILURE
} from "./ActionTypes";

import axios from 'axios';

/* NOTE POST */
export function notePostRequest(contents) {
    return (dispatch) => {
        dispatch(notePost());

        return axios.post('api/note', { contents } )
            .then((response) => {
                dispatch(notePostSuccess());
            }).catch((error) => {
                dispatch(notePostFailure(error.response.data.code));
            })
    };
}

export function notePost() {
    return {
        type: NOTE_POST
    };
}

export function notePostSuccess() {
    return {
        type: NOTE_POST_SUCCESS
    };
}

export function notePostFailure() {
    return {
        type: NOTE_POST_FAILURE
    };
}

/*
    Parameter:
        - isInitial: whether it is for initial loading
        - listType:  OPTIONAL; loading 'old' memo or 'new' memo
        - id:        OPTIONAL; memo id (one at the bottom or one at the top)
        - username:  OPTIONAL; find memos of following user
*/
export function noteListRequest(isInitial, listType, id, username) {
    return (dispatch) => {
        dispatch(noteList());

        let url = '/api/note';

        return axios.get(url)
            .then((response) => {
                dispatch(noteListSuccess(response.data, isInitial, listType));
            }).catch((error) => {
                dispatch(noteListFailure());
            })
    }
}

export function noteList() {
    return {
        type: LIST
    }
}

export function noteListSuccess(data, isInitial, listType) {
    return {
        type: LIST_SUCCESS,
        data,
        isInitial,
        listType
    };
}

export function noteListFailure() {
    return {
        type: LIST_FAILURE
    };
}