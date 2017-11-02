import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editPost, getPost } from '../actions';

class EditPost extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.getPost(id);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now();
        this.props.editPost(id, values);
    }

    render() {
        const { post } = this.props;
        const { id } = this.props.match.params;

        return (
            <div>
                <form className="create-post-form"
                    onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <input type="text" name="title" placeholder="Post Title" value={post.title} />
                        <textarea name="body" placeholder="Type your post here..." value={post.body} />
                    </div>
                    <div className="create-post-details">
                        <button>Submit Post</button>
                    </div>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (id, body) => dispatch(editPost(id, body)),
        getPost: (id) => dispatch(getPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);