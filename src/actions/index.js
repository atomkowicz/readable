import * as ReadableAPI from '../utils/api';
import { push } from 'react-router-redux';

// general
export const IS_LOADING = 'ITEM_IS_LOADING';
export const HAS_ERROR = 'ITEM_HAS_ERROR';
export const FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

// categories
export const GET_CATEGORIES = 'GET_CATEGORIES';

// post
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const SORT_POSTS_BY_SCORE = 'SORT_POSTS_BY_SCORE';
export const SORT_POSTS_BY_DATE = 'SORT_POSTS_BY_DATE';

// all comments
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

// single comment
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';
export const GET_POST_COMMENTS_NO = 'GET_POST_COMMENTS_NO';

// fetch all posts from server
export function getPosts() {
    return (dispatch) => {
        ReadableAPI
            .fetchAllPosts()
            .then(posts => dispatch({
                type: GET_ALL_POSTS,
                posts
            }))
    };
};

// fetch all available categories from server
export function getCategories() {
    return (dispatch) => {
        ReadableAPI
            .fetchCategories()
            .then(categories => dispatch({
                type: GET_CATEGORIES,
                categories
            }))
    };
};

export function getPost(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchPost(id)
            .then(post => dispatch({
                type: GET_POST,
                post
            }))
    };
};

export function addPost(body) {
    return (dispatch) => {
        ReadableAPI
            .addPost(body)
            .then(post => {
                dispatch({
                    type: ADD_POST,
                    post
                });
                dispatch(push('/'));
            })
    }
};

export function deletePost(id) {
    return (dispatch) => {
        ReadableAPI
            .deletePost(id)
            .then(post => {
                dispatch({
                    type: DELETE_POST,
                    post
                });
                dispatch(push('/'));
            })
    }
};

export function editPost(id, body) {
    return (dispatch) => {
        ReadableAPI
            .editPost(id, body)
            .then(post => {
                dispatch({
                    type: EDIT_POST,
                    post
                })
                dispatch({
                    type: GET_POST,
                    post
                })
                dispatch(push(`/posts/${id}`))
            })
    }
};

export function getPostComments(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchPostComments(id)
            .then(comments => dispatch({
                type: GET_POST_COMMENTS,
                comments
            }))
    }
};

export function getCommentsNo(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchPostCommentsNo(id)
            .then(commentsNo => dispatch({
                type: GET_POST_COMMENTS_NO,
                commentsNo,
                id
            }))
    }
};

export function deleteComment(id) {
    return (dispatch => {
        ReadableAPI
            .deleteComment(id)
            .then(comment => {
                dispatch({
                    type: DELETE_COMMENT,
                    comment
                })
            })
    })
};

export function addComment(body) {
    return (dispatch) => {
        ReadableAPI
            .addComment(body)
            .then(comment => {
                dispatch({
                    type: ADD_COMMENT,
                    comment
                })
            })
    }
};

export function editComment(id, body) {
    return (dispatch) => {
        ReadableAPI
            .editComment(id, body)
            .then(comment => {
                dispatch({
                    type: EDIT_COMMENT,
                    comment
                })
                //dispatch(push(`/posts/${parentId}`))
            })
    }
};

export function getComment(id) {
    return (dispatch) => {
        ReadableAPI
            .fetchComment(id)
            .then(comment => dispatch({
                type: GET_COMMENT,
                comment
            }))
    };
};

export function votePost(id, vote) {
    let values = {};
    values["option"] = vote;
    return (dispatch) => {
        ReadableAPI
            .votePost(id, values)
            .then(post => {
                switch (vote) {
                    case "upVote":
                        dispatch({
                            type: UPVOTE_POST,
                            post
                        });
                        return;
                    case "downVote":
                        dispatch({
                            type: DOWNVOTE_POST,
                            post
                        });
                        return;
                    default: return;
                }
            })
    }
};

export function voteComment(id, vote) {
    let values = {};
    values["option"] = vote;
    return (dispatch) => {
        ReadableAPI
            .voteComment(id, values)
            .then(comment => {
                switch (vote) {
                    case "upVote":
                        dispatch({
                            type: UPVOTE_COMMENT,
                            comment
                        });
                        return;
                    case "downVote":
                        dispatch({
                            type: DOWNVOTE_COMMENT,
                            comment
                        });
                        return;
                    default: return;
                }
            })
    }
};

export function sortPostsByDate(posts) {
    return {
        type: SORT_POSTS_BY_DATE,
        posts
    }
}
export function sortPostsByScore(posts) {
    return {
        type: SORT_POSTS_BY_SCORE,
        posts
    }
}