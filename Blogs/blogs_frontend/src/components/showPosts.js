import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom';

const ShowPosts = (props) => {

  console.log(props);

  
    return (
      <>
        <Header />
        <h1>Show Posts</h1>
        <ul>
          {props.show.map((post, index) => (
            <div key={index}>
              <Link to={`/posts/${post.id}`}>
                <li>
                  <p>{post.title}</p>
                </li>
              </Link>

            </div>
          ))}
        </ul>
      </>
    );
};

export default ShowPosts;