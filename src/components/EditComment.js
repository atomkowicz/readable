import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editComment } from '../actions';

class EditComment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now();
        this.props.editComment(this.props.id, values);
    }

    render() {
        

        return (
            <div>
                <form className="create-post-form"
                    onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <textarea name="body" placeholder="Body" defaultValue="{comment.body}" />
                    </div>
                    <div className="create-post-details">
                        <button>Submit Comment</button>
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
        editComment: (id, body) => dispatch(editComment(id, body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);