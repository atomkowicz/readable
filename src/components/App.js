import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header';
import Menu from './Menu';
import PostList from './PostList'
import PostDetails from './PostDetails';
import AddPost from './AddPost';
import EditPost from './EditPost';
import EditComment from './EditComment';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                component={PostList} />
              <Route
                exact path="/comments/:id/edit"
                component={EditComment} />
              <Route
                exact path="/posts/add"
                component={AddPost} />
              <Route
                exact path="/:category/:id/edit"
                component={EditPost} />
              <Route
                exact path="/:category/:id"
                component={PostDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;