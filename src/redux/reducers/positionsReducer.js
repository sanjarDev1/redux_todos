import { ADD_POSITION, REMOVE_POSITION } from '../actionTypes';

const positionSlice = (
  state = [
    { id: 1, name: 'Orolboy', selry: '8000$' },
    { id: 2, name: 'Tursunboy', selry: '2000$' },
    { id: 3, name: 'Karimboy', selry: '3000$' },
  ],
  action
) => {
  switch (action.type) {
    case ADD_POSITION:
      let newPosition = {
        id: state.length + 1,
        name: action.payload.name,
        selry: action.payload.selry,
      };
      state = [...state, { ...newPosition }];
      break;
      case REMOVE_POSITION:
      state=state.filter(i=>i.id !==action.payload)
  }
  return state;
};

export default positionSlice;
