import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header';
import PostList from './PostList';
import Menu from './Menu';
import { connect } from 'react-redux';
import { fetchPosts, fetchCategories } from '../actions'

class App extends Component {

  componentDidMount = () => {
    this.props.getAllCategories();
    this.props.getAllPosts();
  } 

  render() {
    const { posts, categories } = this.props;
    return (
      <div className="App">
        <Header title={"all posts"}/>
        <Menu categories={categories} />
        <PostList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(fetchPosts()),
    getAllCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
