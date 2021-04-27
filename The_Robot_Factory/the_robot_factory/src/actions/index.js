export const addRobots = (robot) => {
  return {
    type: "ADD_ROBOT",
    payload: robot,
  };
};

export const deleteRobots = (index) => {
  return {
    type: "DELETE_ROBOT",
    payload: index,
  };
};
