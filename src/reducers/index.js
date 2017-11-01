import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    GET_CATEGORIES,
    GET_ALL_POSTS,
    GET_POST,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    GET_POST_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actions';

function posts(state = [], action) {
    const { posts, post } = action;

    switch (action.type) {
        case GET_ALL_POSTS:
            return posts;
        case ADD_POST:
            return [...state, post];
        case EDIT_POST:
            const arr = state.filter((item) => item.id !== post.id)
            return [...arr, post]
        case DELETE_POST:
            return state.filter((item) => item.id !== post.id);
        default:
            return state;
    }
};

function categories(state = [], action) {
    const { categories } = action;

    switch (action.type) {
        case GET_CATEGORIES:
            return categories;
        default:
            return state;
    }
};

function post(state = [], action) {
    const { post } = action;

    switch (action.type) {
        case GET_POST:
            return post;
        default:
            return state;
    }
};

function postComments(state = [], action) {
    const { comments, comment } = action;

    switch (action.type) {
        case GET_POST_COMMENTS:
            return comments;
        case ADD_COMMENT:
            return [...state, comment];
        case DELETE_COMMENT:
            return state.filter((item) => item.id !== comment.id);
        case EDIT_COMMENT:
            const arr = state.filter((item) => item.id !== comment.id)
            return [...arr, comment]
        default:
            return state;
    }
};

export default combineReducers({
    post,
    posts,
    postComments,
    categories,
    routing: routerReducer
});