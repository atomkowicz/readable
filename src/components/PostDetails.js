import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import CommentList from './CommentList';
import Post from './Post';

class PostDetails extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.getPost(id);
    }

    render() {
        const { post } = this.props;
        const { id } = this.props.match.params;

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
    const { post } = state;

    return {
        post: post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id) => dispatch(getPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);