import { combineReducers } from 'redux';

const robotList = [];

const robotReducer = (result = robotList, action) => {

    if (action.type === 'ADD_ROBOT') {
        robotList.push({ name: action.payload, id: robotList.length, posX: 0, posY: 0, heading: 'North' });
        return [...robotList];
    }

    if (action.type === "DELETE_ROBOT") {
        robotList.splice(action.payload, 1);
        return [...robotList];
    }
    return result;
}

export default combineReducers({
    robots: robotReducer,
})

