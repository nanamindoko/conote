import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    post : {
        status : "INIT",
        error : -1
    },
    list: {
        status: "INIT",
        error : -1,
        isLast: false
    }
};

export default function note(state, action) {
    if(typeof state === "undefined") {
        state = initialState
    }

    switch(action.type) {
        case types.NOTE_POST:
            return update(state, {
                post: {
                    status: {$set: "WAITING" },
                    error: {$set: -1}
                }
            });

        case types.NOTE_POST_SUCCESS:
            return update(state, {
                post: {
                    status: { $set: 'SUCCESS' }
                }
            });
        case types.NOTE_POST_FAILURE:
            return update(state, {
                post: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        case types.LIST:
            return update(state, {
                list: {
                    status: { $set: 'WAITING' },
                }
            });
        case types.LIST_SUCCESS:
            if(action.isInitial) {
                return update(state, {
                    list: {
                        status: { $set: 'SUCCESS' },
                        data: { $set: action.data },
                        isLast: { $set: action.data.length < 6 }
                    }
                })
            }
            // loading older or newer memo
            // to be implemented..
            return state;
        case types.LIST_FAILURE:
            return update(state, {
                list: {
                    status: { $set: 'FAILURE' }
                }
            });
        default:
            return state;
    }
}