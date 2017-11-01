import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import { uuid } from '../utils/helpers';

class AddPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        values["id"] = uuid();
        values["timestamp"] = Date.now();

        this.props.addPost(values);
        console.log(values)
    }

    render() {
        const { categories } = this.props;

        return (
            <div>
                <form className="create-post-form" onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <input type="text" name="title" placeholder="Title" value={"title1"} />
                        <textarea name="body" placeholder="Type your text here" value={"body"} />
                        <input type="text" name="author" placeholder="Athor" value={"author1"} />
                        <select name="category" defaultValue="react">
                            {
                                categories.map((category) => (
                                    <option key={category.path} value={category.path}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="create-post-details">
                        <button>Add Post</button>
                    </div>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (state) => {

    return {
        categories: state.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (body) => dispatch(addPost(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);