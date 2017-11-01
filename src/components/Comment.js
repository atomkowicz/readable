import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../actions'
import {Link} from 'react-router-dom';

class Comment extends Component {

    deleteComment = (id) => {
        this.props.deleteComment(id);
    }

    render() {
        const { comment } = this.props;

        return (
            <li className="comment-list-item">
                <div className="post-details">
                    <div className="post-info">
                        <span className="post-author">Author: {comment.author}</span>
                        <span className="post-author">{comment.timestamp}</span>
                    </div>
                    <p>{comment.body}</p>
                    <div className="post-info">
                        <button className="post-downvote">Downvote</button>
                        <span>Score: {comment.voteScore}</span>
                        <button className="post-upvote">Upvote</button>
                        <Link to={`/comments/${comment.id}/edit`}
                            className="post-edit">
                            Edit
                        </Link>
                        <a href=""
                            className="post-delete"
                            onClick={() => this.deleteComment(comment.id)}>Delete</a>
                    </div>
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);