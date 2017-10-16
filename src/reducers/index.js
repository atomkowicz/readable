import { combineReducers } from 'redux';
import { ADD_POST, ADD_COMMENT } from '../actions';

const initialState = {}

function post(state = initialState, action) {
    const { id, timestamp, title, body, author, category } = action;

    switch (action.type) {
        case ADD_POST:
            return state;
        default:
            return state;
    }
}

function comment(state = initialState, action) {
    const { id, timestamp, body, author, parentId } = action;

    switch (action.type) {
        case ADD_COMMENT:
            return state;
        default:
            return state;
    }
}

export default combineReducers({
    post,
    comment
});