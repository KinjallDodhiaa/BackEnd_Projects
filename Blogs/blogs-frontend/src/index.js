import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AddPosts from './components/addPosts';
import ShowPosts from './components/showPosts';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-quill/dist/quill.snow.css";
import Posts from './components/posts';
  

const App = () => {

  const[post,setPost] = useState([]);

    return (
      <Router>
        <Switch>
        <Route exact path='/'>
            <ShowPosts showPosts={post}/>
        </Route> 
        <Route path='/addPosts'>
            <AddPosts/>
        </Route>
        <Route path='/posts/:id'>
          <Posts showPostDetails={post}/>
        </Route>
        </Switch>
      </Router>
    );
};

ReactDOM.render(<App/>,document.getElementById('root'));