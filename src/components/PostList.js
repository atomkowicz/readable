import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions';

class PostList extends Component {

    currentCategory = () => {
        // get current post id from url in case user refreshes page
        if (this.props.path.match(/\w+$/g) !== null) {
            return this.props.path.match(/\w+$/g).join("");
        } else {
            return "";
        }
    }

    componentDidMount = () => {
        this.props.getAllPosts();
    }

    render() {
        const { posts } = this.props;
        const currentCategory = this.currentCategory();
        let postList = posts;
        if (currentCategory) postList = posts.filter((post) => post.category === currentCategory);

        return (
            <div className="list-posts">
                <ol className="post-list">
                    {
                        postList.length ?
                            postList.map((post, i) => (
                                <Post key={i} post={post} />
                            ))
                            : (<div className="no-results">no results</div>)
                    }
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { pathname } = state.routing.location;

    return {
        posts: state.posts,
        categories: state.categories,
        path: pathname,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPosts: () => dispatch(getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);