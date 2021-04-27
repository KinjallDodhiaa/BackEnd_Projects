import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

const RobotDetails = (props) => {
    const { id } = useParams();
    console.log(id);

    const foundRobot = props.robots.find((robot) => id == robot.id);
    console.log(props.robots);

    return (
        <>
            {foundRobot ? (
                <div className="container mt-5">
                        <Link to="/">Go Back To Main</Link>
                        <h3>Name :</h3>
                        <p>{foundRobot.name}</p>
                        <h4>Position :</h4>
                        <ul>
                        <li className="listStyle">PosX:{foundRobot.posX}</li>
                        <li className="listStyle">PosY:{foundRobot.posY}</li>
                        </ul>
                        <h4>Heading :</h4>
                        <h6>{foundRobot.heading}</h6>
                    <button className="btn btn-secondary btn-xl mr-2 pr-3 pl-3">
                        Right
          </button>
                    <button className="btn btn-secondary btn-xl mr-2 pr-3 pl-3">
                        Left
          </button>
                    <button className="btn btn-secondary btn-xl mr-2 pr-3 pl-3">
                        Move
          </button>
                </div>
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        robots: state.robots,
    };
};

export default connect(mapStateToProps)(RobotDetails);

