import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import CommentList from './CommentList';
import Post from './Post';

class PostDetails extends Component {

    currentPostId = () => {
        console.log(this.props.path)
        // get current post id from url in case user refreshes page
        return this.props.path.match(/\w+$/g).join("");
    }

    componentDidMount = () => {
        const id = this.currentPostId()
        this.props.getPost(id);
    }

    render() {
        const { post } = this.props;
        const id = this.currentPostId();

        return (
            <div>
                <Post post={post} />
                <p className="container-text">Comments:</p>
                <CommentList postId={id} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { post, routing } = state;

    return {
        path: routing.location.pathname,
        post: post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id) => dispatch(getPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);