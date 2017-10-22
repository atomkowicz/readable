import { combineReducers } from 'redux';
import { GET_ALL_POSTS, GET_CATEGORIES, ADD_POST, ADD_COMMENT } from '../actions';


function posts(state = [], action) {
    const { posts } = action;

    switch (action.type) {
        case GET_ALL_POSTS:
            return posts.sort((x, y) => x.voteScore < y.voteScore)
        default:
            return state;
    }
}

function categories(state = [], action) {
    const { categories } = action;

    switch (action.type) {
        case GET_CATEGORIES:
            return categories
        default:
            return state;
    }
}

function post(state = [], action) {
    const { id, timestamp, title, body, author, category } = action;

    switch (action.type) {
        case ADD_POST:
            return { ...state };
        default:
            return state;
    }
}

function comment(state = [], action) {
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
    categories
});