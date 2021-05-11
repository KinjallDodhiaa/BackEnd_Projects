import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const ShowPosts = (props) => {
    return (
      <>
        <Header/>

        <h1>Show posts</h1>
        {props.showPosts.map((post,index)=>{
          <div
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to={`/posts/${post.id}`}>
              <li className="btn btn-secondary btn-lg mb-2">{post}</li>
            </Link>
            <button>
              EDIT
            </button>
          </div>;
        })}
      </>
    );
};

export default ShowPosts;