import React, { Component } from 'react';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Readable - all posts</h1>
        </header>
        <div className="list-posts">
          <ol className="post-list">
            <li className="post-list-item">
              <div className="post-voting-box" >
                <button className="post-upvote">Upvote</button>
                <div className="post-score">
                  <p>Score: <span>19</span></p>
                </div>
                <button className="post-downvote">Downvote</button>
              </div>
              <div className="post-details">
                <div className="post-info">
                  <span className="post-author">Author: me</span>
                </div>
                <h3>Are posts listed correctly and have the desired functionality in a list view?</h3>
                <p>Listed posts are displayed with title, author, number of comments, current score, and a voting mechanism to upvote or downvote the post. Posts should have buttons or links for editing or deleting that post.
The voting mechanism works and correctly displays the new vote score after clicking.
List posts link to the detail page for that post.
All posts are listed at the root.
All posts for a category are listed at /:category
List pages (root or category) include a mechanism for sorting by date or by score (at a minimum) and the sort works properly.</p>
                <div className="post-info">
                  <a href="" className="post-comments">Comments: 34</a>&nbsp;&nbsp;&nbsp;
                  <a href="" className="post-edit">Edit</a>&nbsp;&nbsp;&nbsp;
                  <a href="" className="post-delete">Delete</a>
                </div>
              </div>
            </li>
            <li className="post-list-item">
            <div className="post-voting-box" >
              <button className="post-upvote">Upvote</button>
              <div className="post-score">
                <p>Score: <span>19</span></p>
              </div>
              <button className="post-downvote">Downvote</button>
            </div>
            <div className="post-details">
              <div className="post-info">
                <span className="post-author">Author: me</span>
              </div>
              <h3>Are posts listed correctly and have the desired functionality in a list view?</h3>
              <p>Listed posts are displayed with title, author, number of comments, current score, and a voting mechanism to upvote or downvote the post. Posts should have buttons or links for editing or deleting that post.
The voting mechanism works and correctly displays the new vote score after clicking.
List posts link to the detail page for that post.
All posts are listed at the root.
All posts for a category are listed at /:category
List pages (root or category) include a mechanism for sorting by date or by score (at a minimum) and the sort works properly.</p>
              <div className="post-info">
                <a href="" className="post-comments">Comments: 34</a>&nbsp;&nbsp;&nbsp;
                <a href="" className="post-edit">Edit</a>&nbsp;&nbsp;&nbsp;
                <a href="" className="post-delete">Delete</a>
              </div>
            </div>
          </li>
          </ol>
        </div>

      </div>
    );
  }
}

export default App;
