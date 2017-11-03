import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editComment } from '../actions';

class EditComment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, parentId } = this.props.comment;

        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now();
        this.props.editComment(id, values);
        this.props.handleCloseModal();

    }

    handleChange = (e) => {
        switch (e.target.name) {
            case "title":
               // this.setState({ title: e.target.value })
                return;
            case "body":
               // this.setState({ body: e.target.value })
                return;
            default:
                return;
        }
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.handleCloseModal();        
    }

    render() {
        const { comment } = this.props;

        return (
            <div>
                <form className="create-post-form"
                    onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <textarea
                            name="body"
                            placeholder="Type your comment here..."
                            defaultValue={comment.body}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div className="create-post-details">
                        <a className="edit-cancel" onClick={(e) => this.handleCancel(e)}>Cancel</a>
                        <button>Submit Comment</button>
                    </div>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //comment: state.comment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editComment: (id, body) => dispatch(editComment(id, body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);