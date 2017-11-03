import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    GET_CATEGORIES,
    GET_ALL_POSTS,
    GET_POST,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    UPVOTE_POST,
    DOWNVOTE_POST,
    GET_POST_COMMENTS,
    GET_COMMENT,
    ADD_COMMENT,
    EDIT_COMMENT,
    UPVOTE_COMMENT,
    DOWNVOTE_COMMENT,
    DELETE_COMMENT,
    SORT_POSTS_BY_SCORE,
    SORT_POSTS_BY_DATE
} from '../actions';

function posts(state = [], action) {
    const { posts, post } = action;

    switch (action.type) {
        case GET_ALL_POSTS:
            return posts.sort((x, y) => x.voteScore <= y.voteScore);
        case SORT_POSTS_BY_DATE:
            return posts.sort((x, y) => x.timestamp <= y.timestamp);
        case SORT_POSTS_BY_SCORE:
            return posts.sort((x, y) => x.voteScore <= y.voteScore);
        case ADD_POST:
            return [...state, post];
        case EDIT_POST:
        case UPVOTE_POST:
        case DOWNVOTE_POST:
            return state.map(item => (item.id === post.id ? post : item))
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
        case UPVOTE_POST:
        case DOWNVOTE_POST:
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
        case UPVOTE_COMMENT:
        case DOWNVOTE_COMMENT:
            return state.map(item => (item.id === comment.id ? comment : item))
        default:
            return state;
    }
};

function comment(state = [], action) {
    const { comment } = action;

    switch (action.type) {
        case GET_COMMENT:
        case UPVOTE_COMMENT:
        case DOWNVOTE_COMMENT:
            return comment;
        default:
            return state;
    }
};

export default combineReducers({
    post,
    posts,
    comment,
    postComments,
    categories,
    routing: routerReducer
});