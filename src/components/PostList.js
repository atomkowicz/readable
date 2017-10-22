import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

    render() {

        const { posts } = this.props;

        return (

            <div className="list-posts">
                <ol className="post-list">
                    {
                        posts.map(post => (
                            <Post
                                key={post.id}
                                id={post.id}
                                timestamp={post.timestamp}
                                title={post.title}
                                body={post.body}
                                author={post.author}
                                category={post.category}
                                voteScore={post.voteScore}
                            />
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default PostList;