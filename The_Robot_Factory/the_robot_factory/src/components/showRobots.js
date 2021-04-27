import React from "react";
import { deleteRobots } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/style.css";

const ShowRobots = (props) => {
  const deleteRobotsOnClick = (index) => {
    props.delete(index);
  };

  return (
    <div className="container mt-5">
        <h2>Robots</h2>
        <ul className="list-group">
          {props.robotList.map((robot, index) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link key={index} to={`/robotDetails/${robot.id}`}>
                <li className="list-group-item">{robot.name}</li>
              </Link>
              <span
                className="spanSize"
                onClick={() => {
                  deleteRobotsOnClick(index);
                }}
              >
                X
              </span>
            </div>
          ))}
        </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    robotList: state.robots,
  };
};

export default connect(mapStateToProps, { delete: deleteRobots })(ShowRobots);
