import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editPost } from '../actions';

class EditPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now();
        this.props.editPost(id, values);
    }

    render() {
        const { posts } = this.props;
        const { id } = this.props.match.params;

        const post = posts.find(post => post.id === id);

        return (
            <div>
                <form className="create-post-form"
                    onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <input type="text" name="title" placeholder="Title" defaultValue={post.title} />
                        <textarea name="body" placeholder="Body" defaultValue={post.body} />
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
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (id, body) => dispatch(editPost(id, body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);