import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

class Post extends Component {

    deletePost = (e, id) => {
        e.preventDefault();
        this.props.deletePost(id);
    }

    render() {

        let { id, timestamp, title, body, author, category, voteScore } = this.props.post;

        if (this.props.location) {
            let { id, timestamp, title, body, author, category, voteScore } = this.props.location.state.post;
        }

        const { showDetails } = this.props;

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
                        {
                            showDetails
                                ? title
                                : <Link to={{ pathname: `/posts/${id}`, state: { post: this.props.post, edit: false } }}
                                    className="link-button">
                                    {title}
                                </Link>
                        }

                    </h3>
                    <p className={!showDetails ? "post-text" : ""}>{body}</p>
                    <div className="post-info">
                        <Link to={`/posts/${id}`}
                            className="post-comments">
                            Comments: 34
                        </Link>
                        <div className="post-controls">
                            <Link to={{ pathname: `/posts/${id}`, state: { post: this.props.post, edit: true } }}
                                className="post-edit">
                                Edit
                            </Link>
                            <a href="#"
                                className="post-delete"
                                onClick={(e) => this.deletePost(e, id)}>
                                Delete
                                </a>
                        </div>
                    </div>
                </div>
            </li>
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