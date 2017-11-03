import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostList extends Component {

    componentDidMount = () => {
        this.props.getAllPosts();
    }

    onSortMethodChange = (e) => {
        let posts = this.props.posts;
        switch (e.target.value) {
            case "date":
                return;
            case "score":
                return;
            default:
                return;
        }
    }

    render() {
        const { posts } = this.props;
        const { category } = this.props.match.params;

        let postList = category
            ? posts.filter((post) => post.category === category)
            : posts;

        return (
            <div className="list-posts">
                <Link to={`/posts/add`} className="container-text">Add new post</Link>
                {postList.length > 1 && <select
                    className="container-text"
                    name="category"
                    defaultValue="react"
                    onChange={(e) => this.onSortMethodChange(e)}>
                    <option value="score">Sort by score</option>
                    <option value="date">Sort by date</option>
                </select>}
                <ol className="post-list">
                    {
                        postList.length ?
                            postList.map((post, i) => (
                                <Post key={i}
                                    post={post}
                                    showDetails={false} />
                            ))
                            : (<div className="no-results">no results</div>)
                    }
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        categories: state.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);