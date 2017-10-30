import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class Post extends Component {

    deletePost = (id) => {
        this.props.deletePost(id);
    }

    render() {

        const { id, timestamp, title, body, author, category, voteScore } = this.props.post;

        return (
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
                    <h3>
                        <Link to={`/posts/${id}`}
                            className="link-button">
                            {title}
                        </Link>
                    </h3>
                    <p className="post-text">{body}</p>
                    <div className="post-info">
                        <a href="" className="post-comments">Comments: 34</a>
                        <a href="" className="post-edit">Edit</a>
                        <a href=""
                            className="post-delete"
                            onClick={() => this.deletePost(id)}>
                            Delete
                        </a>
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
        deletePost: (id) => dispatch(deletePost(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);