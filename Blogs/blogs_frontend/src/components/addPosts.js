import React, { useRef, useState } from 'react';
import '../css/style.css'
import Header from './header';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
const axios = require("axios").default;


const AddPosts = (props) => {

  const [title,setTitle] = useState('');

  const inputTitleRef = useRef();
  const inputContentRef = useRef();


   const handleBody = e => {
     console.log(e);
     inputContentRef.current.value=e
   }

   const addPost = async (postTitle,postContent) => {
     // TODO
     try {
       axios
         .post("http://localhost:3002/posts/", {
           title: postTitle,
           content:postContent
         })
         .then((response) => {props.sendGetRequest({title})
          //  console.log("response is :" + JSON.stringify(response));
         });
     } catch (error) {
       console.log(error);
     }
   };

   const addPostsOnClick = async () => {
     addPost(inputTitleRef.current.value, inputContentRef.current.value);
     setTitle("");
    //  setContent("");

   };

  
    return (
      <>
        <Header />

        <div className="container">
          <div className="row">
            <form className="m-5">
              <div className="form-group">
                <label for="inputTitle">Title</label>
                <input
                  ref={inputTitleRef}
                  type="text"
                  className="form-control"
                  id="inputTitle"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputContent">Content</label>
                <ReactQuill
                  placeholder="write something amazing..."
                  modules={AddPosts.modules}
                  formats={AddPosts.formats}
                  onChange={handleBody}
                  ref={inputContentRef}
                  id="inputContent"
                />
              </div>
              <Link to='/'>
                <button
                  onClick={() => addPostsOnClick()}
                  type="button"
                  className="btn btn-primary mt-5"
                >
                  <h3>Save</h3>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </>
    );
};

AddPosts.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddPosts.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/* 
 * PropType validation
 */


export default AddPosts;