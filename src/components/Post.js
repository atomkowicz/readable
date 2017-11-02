import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import Modal from 'react-modal';
import EditPost from './EditPost';


class Post extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }


    deletePost = (e, id) => {
        e.preventDefault();
        this.props.deletePost(id);
    }

    editPost = (e, id) => {
        e.preventDefault();
        this.setState({
            showModal: true
        })
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {

        let { id, timestamp, title, body, author, category, voteScore } = this.props.post;

        if (this.props.location) {
            let { id, timestamp, title, body, author, category, voteScore } = this.props.location.state.post;
        }

        const { showDetails } = this.props;

        return (
            <div>
                <li className="post-list-item">
                    <div className="post-voting-box" >
                        <button className="post-upvote">Upvote</button>
                        <div className="post-score">
                            <p>Score: <span>{voteScore}</span></p>
                        </div>
                        <button className="post-downvote">Downvote</button>
                    </div>
                    <div className="post-details">
                        <div className="post-info">
                            <span className="post-author">Author: {author}</span>
                            <span className="post-author">Category: {category}</span>
                            <span className="post-author">{timestamp}</span>
                        </div>
                        <h3 className="post-title">
                            {
                                showDetails
                                    ? title
                                    : <Link to={{ pathname: `/${category}/${id}`, state: { post: this.props.post, edit: false } }}
                                        className="link-button">
                                        {title}
                                    </Link>
                            }

                        </h3>
                        <p className={!showDetails ? "post-text" : ""}>{body}</p>
                        <div className="post-info">
                            {!showDetails && <Link to={`/posts/${id}`}
                                className="post-comments">
                                Comments: 34
                        </Link>}
                            {showDetails && <span>Comments: 34</span>}
                            <div className="post-controls">

                                <a href=""
                                    className="post-delete"
                                    onClick={(e) => this.editPost(e, id)}>
                                    Edit
                                </a>
                                <a href=""
                                    className="post-delete"
                                    onClick={(e) => this.deletePost(e, id)}>
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Modal">
                    <h3>Edit Post</h3>
                    <EditPost post={this.props.post} handleCloseModal={()=>this.handleCloseModal()} />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);