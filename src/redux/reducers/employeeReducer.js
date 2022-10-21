import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from '../actionTypes';

const employeeReducer = (
  state = [
    {
      id: 1,
      name: 'Orolboy',
      surname: 'Quridiyev',
      phone: '+998 99 989 35 46',
      position: 'Team leader',
      degree: 'Senior',
    },
    {
      id: 2,
      name: 'Tursunboy',
      surname: 'Otirdiyev',
      phone: '+998 99 659 78 26',
      position: 'Developer',
      degree: 'Middle',
    },
    {
      id: 3,
      name: 'Karimboy',
      surname: 'Eshitdiyev',
      phone: '+998 99 651 65 74',
      position: 'Tester',
      degree: 'Junior',
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      let newEmployee = {
        id: state.length + 1,
        name: action.payload.name,
        surname: action.payload.surname,
        phone: action.payload.phone,
        surname: action.payload.surname,
        position: action.payload.position,
        degree: action.payload.degree,
      };
      state = [...state, { ...newEmployee }];
      break;
    case REMOVE_EMPLOYEE:
      state=state.filter(i=>i.id !==action.payload)
  }

  return state;
};
export default employeeReducer;
