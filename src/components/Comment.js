import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../actions'
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import EditComment from './EditComment';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    deleteComment = (e, id) => {
        e.preventDefault();        
        this.props.deleteComment(id);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    editComment = (e, id) => {
        e.preventDefault();
        this.setState({
            showModal: true
        })
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
                    
                        <a href=""
                            className="post-edit"
                            onClick={(e) => this.editComment(e)}>Edit</a>
                        <a href=""
                            className="post-delete"
                            onClick={(e) => this.deleteComment(e,comment.id)}>Delete</a>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Modal">
                    <h3>Edit Comment</h3>
                    <EditComment comment={comment} handleCloseModal={()=>this.handleCloseModal()} />
                </Modal>
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