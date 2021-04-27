let posX = 0;
let posY = 0;
let direction = "NORTH";

const followInstruction = (instruction) => {
  switch (instruction) {
    case "R":
      rotateRight(direction);
      break;
    case "L":
      rotateLeft(direction);
      break;
    case "G":
      moveForward(direction);
      break;
    default:
      null;
      break;
  }
};

const rotateRight = (heading) => {
  switch (heading) {
    case "NORTH":
      direction = "EAST";
      break;
    case "EAST":
      direction = "SOUTH";
      break;
    case "SOUTH":
      direction = "WEST";
      break;
    case "WEST":
      direction = "NORTH";
      break;
    default:
      null;
      break;
  }
};

const rotateLeft = (heading) => {
  switch (heading) {
    case "NORTH":
      direction = "WEST";
      break;
    case "EAST":
      direction = "NORTH";
      break;
    case "SOUTH":
      direction = "EAST";
      break;
    case "WEST":
      direction = "SOUTH";
      break;
    default:
      null;
      break;
  }
};

const moveForward = (heading) => {
  switch (heading) {
    case "NORTH":
      posY++;
      break;
    case "EAST":
      posX++;
      break;
    case "SOUTH":
      posY--;
      break;
    case "WEST":
      posX--;
      break;
    default:
      null;
      break;
  }
};

const printOutPosition = (position) => {
  console.log(position);
};

const refuseInstructions = () => {
  console.log("Eddy does not understand that");
};

// read in the input arguments
const argumentVector = process.argv;
//console.log("vector", argumentVector)

// take only the instructions from the programInputArgumentsArray
const instructions = argumentVector[2] || "";

let areInstructionsValid = true;

for (let i = 0; i < instructions.length; i++) {
  if (
    instructions[i] !== "R" &&
    instructions[i] !== "L" &&
    instructions[i] !== "G"
  ) {
    areInstructionsValid = false;
  } else {
    followInstruction(instructions[i]);
  }
}

if (areInstructionsValid) {
  let position = {
    posX: posX,
    posY: posY,
  };
  printOutPosition(position);
} else {
  refuseInstructions();
}
