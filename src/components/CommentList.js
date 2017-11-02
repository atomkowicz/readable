import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getPostComments, addComment } from '../actions';
import { uuid } from '../utils/helpers';
import serializeForm from 'form-serialize';

class CommentList extends Component {
    componentDidMount = () => {
        const { postId } = this.props;
        this.props.getPostComments(postId);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        values["id"] = uuid();
        values["timestamp"] = Date.now();
        values["parentId"] = this.props.postId;
        this.props.addComment(values);
    }

    render() {
        const { comments } = this.props;

        return (
            <div className="list-posts">
                <ol className="post-list">
                    {
                        comments.length ?
                            comments.map((comment, i) => (
                                <Comment key={i} comment={comment} />
                            ))
                            : (<div className="no-results">There is no comments on this post, you can be the first to add comment.</div>)
                    }
                </ol>
                <form
                    className="container-text create-comment"
                    onSubmit={this.handleSubmit}>
                    <div>
                        <textarea name="body" placeholder="Type your text here" defaultValue={"This is my new comment."} />
                        <input type="text" name="author" placeholder="Athor" defaultValue={"me"} />

                    </div>
                    <div className="create-post-details">
                        <button>Add Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { postComments, comment } = state;
    return {
        comments: postComments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostComments: (id) => dispatch(getPostComments(id)),
        addComment: (body) => dispatch(addComment(body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);