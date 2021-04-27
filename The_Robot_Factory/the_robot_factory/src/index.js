import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddRobots from './components/addRobots';
import ShowRobots from './components/showRobots';
import RobotDetails from './components/robotDetails';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <AddRobots />
                    <ShowRobots />
                </Route>
                <Route path='/robotDetails/:id'>
                    <RobotDetails />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
)