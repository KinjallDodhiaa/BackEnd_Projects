import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AddPosts from './components/addPosts';
import ShowPosts from './components/showPosts';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-quill/dist/quill.snow.css";
import Posts from './components/posts';
  
const axios = require("axios").default;


const App = () => {

  const[post,setPost] = useState([]);

   useEffect(() => {
     sendGetRequest();
   }, []);

    const sendGetRequest = async () => {
      try {
        await axios
          .get("http://localhost:3002/posts/")
          .then((response) => setPost(response.data));
      } catch (err) {
        console.error(err);
      }
    };


    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <ShowPosts show={post} />
          </Route>
          <Route path="/addPosts">
            <AddPosts sendGetRequest={sendGetRequest} />
          </Route>
          <Route path="/posts/:id">
            <Posts showPostDetails={post} sendGetRequest={sendGetRequest} />
          </Route>
        </Switch>
      </Router>
    );
};

ReactDOM.render(<App/>,document.getElementById('root'));