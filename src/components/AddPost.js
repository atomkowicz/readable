import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class AddPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        console.log(values);
    }

    render() {
        return (
            <div>
                <form className="create-post-form" onSubmit={this.handleSubmit}>
                    <div className="create-post-details">
                        <input type="hidden" name="id" />
                        <input type="hidden" name="timestamp" />
                        <input type="text" name="title" placeholder="Title" />
                        <input type="text" name="body" placeholder="Body" />
                        <input type="text" name="author" placeholder="Athor" />
                        <select name="category" defaultValue="react">
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="udacity">Udacity</option>
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

export default AddPost;