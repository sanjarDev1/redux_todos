import { type } from '@testing-library/user-event/dist/type';
import {
  ADD_DEGREE,
  ADD_EMPLOYEE,
  ADD_POSITION,
  REMOVE_DEGREE,
  REMOVE_EMPLOYEE,
  REMOVE_POSITION,
} from './actionTypes';

export const addDegree = (payload) => {
  return { type: ADD_DEGREE, payload };
};

export const addPosition = (payload) => {
  return { type: ADD_POSITION, payload };
};

export const addEmployee = (payload) => {
  return { type: ADD_EMPLOYEE, payload };
};

export const removeDegree = (payload) => {
  return { type: REMOVE_DEGREE, payload };
};

export const removePosition = (payload) => {
  return { type: REMOVE_POSITION, payload };
};

export const removeEmployee = (payload) => {
  return { type: REMOVE_EMPLOYEE, payload };
};
