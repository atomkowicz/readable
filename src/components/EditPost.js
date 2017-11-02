import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { editPost, getPost } from '../actions';

class EditPost extends Component {
    state = {
        body: "ddd",
        title: "ddd"
    }

    componentDidMount = () => {
        //const { id } = this.props.match.params;
        //this.props.getPost(id);

        // this.setState({
        //     body: this.props.post.body,
        //     title: this.props.post.title
        // })


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


    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.post.id;
        const values = serializeForm(e.target, { hash: true })
        values.timestamp = Date.now();
        this.props.editPost(id, values);
    }



    render() {
        const { post } = this.props;
        // const { id } = this.props.match.params;
        console.log(post)
        

        return (
            <div>
                <form className="create-post-form"
                    onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <input type="text"
                            name="title"
                            placeholder="Post Title"
                            defaultValue={this.props.post.title}
                            onChange={(e) => this.handleChange(e)} />
                        <textarea
                            name="body"
                            placeholder="Type your post here..."
                            defaultValue={this.props.post.body}
                            onChange={(e) => this.handleChange(e)} />
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
        //post: state.post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (id, body) => dispatch(editPost(id, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);