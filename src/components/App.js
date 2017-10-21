import React, { Component } from 'react';
import '../assets/styles/App.css';
import * as ReadableAPI from '../utils/api';
import Header from './Header';
import PostList from './PostList';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount = () => {
    ReadableAPI.getAllPosts().then((posts) => {
      this.setState({ posts });
    })
  }


  render() {

    return (
      <div className="App">
        <Header />
        <PostList posts={this.state.posts}/>
      </div>
    );
  }

}

export default App;
