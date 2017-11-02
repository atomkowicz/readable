import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions';
import CommentList from './CommentList';
import Post from './Post';
import EditPost from './EditPost';

class PostDetails extends Component {

    state = {
        modalOpen: false,
        post: null,
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.getPost(id);
    }

    openModal = ({ post }) => {
        this.setState(() => ({
            modalOpen: true,
            post
        }))
    }

    closeModal = () => {
        this.setState(() => ({
          modalOpen: false,
          post: null
        }))
      }

    render() {
        const { post } = this.props;
        const { id } = this.props.match.params;
        

        return (
            <div>
                {!this.props.location.state.edit && <Post post={post} showDetails={true} />}
                {this.props.location.state.edit && <EditPost post={this.props.location.state.post}  />}
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