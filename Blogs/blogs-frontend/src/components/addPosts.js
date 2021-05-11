import React, { useState } from 'react';
import '../css/style.css'
import Header from './header';
import ReactQuill from 'react-quill';

const AddPosts = () => {

  const [body,setBody] = useState('');

  const handleBody = e => {
    console.log(e);
    setBody(e);
  }
  
    return (
      <>
        <Header />

        <div className="container">
          <div className="row">
            <form className="m-5">
              <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Content</label>
                <ReactQuill
                  placeholder="write something amazing..."
                  modules={AddPosts.modules}
                  formats={AddPosts.formats}
                  onChange={handleBody}
                  value={body}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-5">
                <h3>Save</h3>
              </button>
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