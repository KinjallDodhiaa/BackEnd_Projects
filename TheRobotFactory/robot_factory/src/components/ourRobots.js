import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const OurRobots = (props) => {
  const [name, setName] = useState("");

  const inputRef = useRef();

  const addRobot = async (robotName) => {
    // TODO
    try {
      axios
        .put("http://localhost:3001/create", {
          name: robotName,
        })
        .then((response) => {
          props.sendGetRequest(name);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addRobotsOnClick = async () => {
    // props.add(inputRef.current.value);
    addRobot(inputRef.current.value);
    inputRef.current.value = "";
    setName("");
  };

  const deleteRobotsOnClick = async (id) => {
    try {
      axios
        .delete("http://localhost:3001/delete", {
          data: { id: id },
        })
        .then((response) => props.sendGetRequest());
    } catch (error) {
      console.log(error);
    }

    console.log(id);
  };

  return (
    <section className="section-2">
      <div className="div-navbar">
        <Link to="/" className="navbar-link">
          Home
        </Link>

        <Link to="/ourRobots" className="navbar-link">
          Our Robots
        </Link>
      </div>

      <div className="section-2-banner">
        <h1>Create Robots</h1>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder="write the name of robot over here and click on create...."
        />
        <button
          onClick={() => addRobotsOnClick()}
          type="button"
          className="btn btn-secondary btn-lg"
        >
          Create
        </button>

        <h2>Robots Collection</h2>
        <ul className="list-group">
          {props.show.map((robot, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to={`/robotDetails/${robot.id}`}>
                <li className="list-group-item">{robot.name}</li>
              </Link>
              <span
                className="spanSize"
                onClick={() => {
                  deleteRobotsOnClick(robot.id);
                }}
              >
                X
              </span>
            </div>
          ))}
        </ul>
      </div>
      <div className="imageshow">
        <img src="../images/robot-factory.jpeg" />
      </div>
    </section>
  );
};

export default OurRobots;
