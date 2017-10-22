import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header';
import PostList from './PostList';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class App extends Component {

  componentDidMount = () => {
    this.props.getAllPosts()
  }


  render() {

    let postsToDisplay = [];

    if (this.props.posts.allPosts)
      postsToDisplay = this.props.posts.allPosts;

    console.log(postsToDisplay);

    return (
      <div className="App">
        <Header />
        <PostList posts={postsToDisplay} />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
