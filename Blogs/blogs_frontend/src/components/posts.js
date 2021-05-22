import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './header';
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

// const axios = require("axios").default;


const Posts = (props) => {

    const {id} = useParams();

    const foundPost = props.showPostDetails.find((post) => id == post.id);
    // const updateBlogs = async (id) => {
    //   try {
    //     axios
    //       .post("http://localhost:3002/posts/update", { id: id })
    //       .then((res) => props.showPostDetails);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };


    return (
      <>
        <Header />
        <div className="container">
          {foundPost ? (
            <>
              <ul>
                <li>{foundPost.title}</li>
                <p dangerouslySetInnerHTML={{ __html: foundPost.content }}></p>
              </ul>
            </>
          ) : null}
          <button>Edit</button>
        </div>
      </>
    );
};

export default Posts;