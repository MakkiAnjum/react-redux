import * as actionTypes from "./actionTypes";

// action creator
export const increment = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrement = () => {
  return { type: actionTypes.DECREMENT };
};

// here we expect the payload as argument
export const add = value => {
  return { type: actionTypes.ADD, val: value };
};

export const subtract = value => {
  return { type: actionTypes.SUBTRACT, val: value };
};
