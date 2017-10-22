import { combineReducers } from 'redux';
import { GET_ALL_POSTS, ADD_POST, ADD_COMMENT } from '../actions';

const initialState = {
    posts: {
        allPosts:[]
    }
}

function posts(state = initialState, action) {
    const { posts } = action;

    switch (action.type) {
        case GET_ALL_POSTS:
        return {
            ...state,
            allPosts: action.posts
        };
        default:
            return state;
    }
}

function post(state = initialState, action) {
    const { id, timestamp, title, body, author, category } = action;

    switch (action.type) {
        case ADD_POST:
            return { ...state };
        default:
            return state;
    }
}

function comment(state = initialState, action) {
    const { id, timestamp, body, author, parentId } = action;

    switch (action.type) {
        case ADD_COMMENT:
            return { ...state };
        default:
            return state;
    }
}

export default combineReducers({
    posts,
    comment
});