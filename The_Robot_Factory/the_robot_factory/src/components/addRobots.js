import React, { useRef } from "react";
import { connect } from "react-redux";
import { addRobots } from "../actions";

const AddRobots = (props) => {
  const inputRef = useRef();

  const addRobotsOnClick = () => {
    props.addRobots(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="container mt-5">
      <h2>Create a new robot</h2>
      <label htmlFor="basic-url">Name :</label>
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <button
        onClick={addRobotsOnClick}
        type="button"
        className="btn btn-secondary btn-lg"
      >
        Create
      </button>
    </div>
  );
};

export default connect(null, { addRobots })(AddRobots);
