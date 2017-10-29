import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { getPostComments } from '../actions';

class CommentList extends Component {
    componentDidMount = () => {
        this.props.getPostComments(this.props.currentPostId);
    }

    render() {
        const { comments } = this.props;

        return (
            <div className="list-posts">
                <ol className="post-list">
                    {
                        comments.length ?
                            comments.map(comment => (
                                <Comment key={comment.id} comment={comment} />
                            ))
                            : (<div className="no-results">no results</div>)
                    }
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { postComments } = state;
    const { pathname } = state.routing.location;

    // get current post id from url in case user refreshes page
    const id = pathname.match(/\w+$/g).join("");

    return {
        comments: postComments,
        currentPostId: id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostComments: (id) => dispatch(getPostComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);