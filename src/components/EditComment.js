import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editComment, getComment } from '../actions';

class EditComment extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.getComment(id);
        console.log(this.props.comment)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now();
        this.props.editComment(this.props.id, values);
    }

    render() {
        const { comment } = this.props;

        return (
            <div>
                <form className="create-post-form"
                    onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <textarea name="body" defaultValue={comment.body} />
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

    const {comment} = state;
    return {
        comment: state.comment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editComment: (id, body) => dispatch(editComment(id, body)),
        getComment: (id) => dispatch(getComment(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);