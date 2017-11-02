import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostList extends Component {
    state = {
        posts: ''
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
        const { category } = this.props.match.params;

        let sortedPosts = this.state.posts ? this.state.posts : posts;
        let postList = category
            ? sortedPosts.filter((post) => post.category === category)
            : sortedPosts;

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