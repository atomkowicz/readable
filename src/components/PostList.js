import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions';

class PostList extends Component {
    state = {
        posts: ''
    }

    currentCategory = () => {
        // get current post id from url in case user refreshes page
        if (this.props.path.match(/\w+$/g) !== null) {
            return this.props.path.match(/\w+$/g).join("");
        } else {
            return "";
        }
    }

    sortByTimestamp = (posts) => {
        return posts.sort((x, y) => x.timestamp < y.timestamp);
    }

    sortByVoteScore = (posts) => {
        return posts.sort((x, y) => x.voteScore < y.voteScore);
    }

    componentDidMount = () => {
        this.props.getAllPosts();
    }

    onSortMethodChange = (e) => {
        let posts = this.props.posts;
        switch (e.target.value) {
            case "date":
                this.setState({ posts: posts.sort((x, y) => x.timestamp < y.timestamp) });
                return;
            case "score":
                this.setState({ posts: posts.sort((x, y) => x.voteScore < y.voteScore) });
                return;
            default:
                this.setState({ posts: posts });
        }
    }

    render() {
        const { posts } = this.props;
        const currentCategory = this.currentCategory();

        let sortedPosts = this.state.posts ? this.state.posts : posts;
        let postList = currentCategory
            ? sortedPosts.filter((post) => post.category === currentCategory)
            : sortedPosts;

        return (
            <div className="list-posts">
                <select name="category" defaultValue="react" onChange={(e) => this.onSortMethodChange(e)}>
                    <option value="score">by score</option>
                    <option value="date">by date</option>
                </select>
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