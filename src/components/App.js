import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header';
import Menu from './Menu';
import PostList from './PostList'
import PostDetails from './PostDetails';
import AddPost from './AddPost';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div>
          <Header title={"all posts"} />
          <Menu />
          <div className="container">
            <Switch>
              <Route
                exact path="/:category?"
                render={() => <PostList />} />
              <Route
                exact path="/posts/add"
                render={() => <AddPost />} />
              <Route
                exact path="/:category/:id"
                render={() => <PostDetails />} />

            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;