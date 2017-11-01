import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    GET_ALL_POSTS,
    GET_CATEGORIES,
    GET_CATEGORY_POSTS,
    GET_POST,
    GET_POST_COMMENTS,
    ADD_POST,
    EDIT_POST,
    ADD_COMMENT
} from '../actions';


function posts(state = [], action) {
    const { posts } = action;

    switch (action.type) {
        case GET_ALL_POSTS:
            return posts;
        case GET_CATEGORY_POSTS:
            return posts;
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
        case ADD_POST:
            return post;
        case EDIT_POST:
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