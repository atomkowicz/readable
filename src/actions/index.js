import * as ReadableAPI from '../utils/api';
import { push } from 'react-router-redux'

// general
export const IS_LOADING = 'ITEM_IS_LOADING';
export const HAS_ERROR = 'ITEM_HAS_ERROR';
export const FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

// categories
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';

// all posts
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

// single post
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_POST_DETAILS = 'GET_POST_DETAILS';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

// all comments
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

// single comment
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const UPVOTE_COMENT = 'UPVOTE_COMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


// comment details
export const GET_COMMENT_DETAILS = 'GET_COMMENT_DETAILS';
export const EDIT_COMMENT_DETAILS = 'EDIT_COMMENT_DETAILS';

// fetch all posts from server
export function fetchPosts() {
    return (dispatch) => {
        ReadableAPI
            .getAllPosts()
            .then(posts => dispatch({
                type: GET_ALL_POSTS,
                posts
            }))
    };
};

// fetch posts by category
export function getPostsByCategory(category) {
    return (dispatch) => {
        ReadableAPI
            .getCategoryPosts(category)
            .then(posts => dispatch({
                type: GET_CATEGORY_POSTS,
                posts
            }))
    };
};

// fetch all available categories from server
export function fetchCategories() {
    return (dispatch) => {
        ReadableAPI
            .getAllCategories()
            .then(categories => dispatch({
                type: GET_CATEGORIES,
                categories
            }))
    };
};

export function addPost({ id, timestamp, title, body, author, category }) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category
    }
}