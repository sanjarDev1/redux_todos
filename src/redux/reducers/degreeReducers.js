import { ADD_DEGREE, REMOVE_DEGREE } from '../actionTypes';

const degreeReducers = (
  state = [
    { id: 1, name: 'Orolboy', bonus: '18000$' },
    { id: 2, name: 'Tursunboy', bonus: '20000$' },
    { id: 3, name: 'Karimboy', bonus: '35000$' },
  ],
  action
) => {
  switch (action.type) {
    case ADD_DEGREE:
      let newDegree = {
        id: state.length + 1,
        name: action.payload.name,
        bonus: action.payload.bonus,
      };
      state = [...state, { ...newDegree }];
      break;
    case REMOVE_DEGREE:
      state = state.filter((i) => i.id !== action.payload);
  }
  return state;
};

export default degreeReducers;
