import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEmployee} from '../../redux/action';

const Xodimlar_add = ({ addEmployee,setstate1 }) => {
  const [state, setstate] = useState({
    name: '',
    surname: '',
    phone: '',
    position: '',
    degree: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <h3> Xodim qo'shish</h3>
      </div>
      <div className='card-body p-4  d-flex flex-column gap-3'>
        <input
          value={state.name}
          name='name'
          type='text'
          className='form-control '
          placeholder='Ism'
          onChange={handleChange}
        />
        <input
          value={state.surname}
          name='surname'
          type='text'
          className='form-control'
          placeholder='Familiya'
          onChange={handleChange}
        />
        <input
          value={state.phone}
          name='phone'
          type='number'
          className='form-control'
          placeholder='Telefon'
          onChange={handleChange}
        />
        <select
          name='position'
          value={state.position}
          onChange={handleChange}
          className='custom-select btn  border'
        >
          <option selected>Lavozimi</option>
          <option value='Team leader'>Team leader</option>
          <option value='Developer'>Developer</option>
          <option value='Tester'>Tester</option>
        </select>
        <select
          name='degree'
          value={state.degree}
          onChange={handleChange}
          className='custom-select btn  border'
        >
          <option selected>Ilmiy daraja</option>
          <option value='Senior'>Senior</option>
          <option value='Middle'>Middle</option>
          <option value='Junior'>Junior</option>
        </select>
      </div>
      <div className='card-footer '>
        <button
          onClick={() => {
            addEmployee(state);
            setstate({
              name: '',
              surname: '',
              phone: '',
              position: '',
              degree: '',
            });
          }}
          className='btn btn-primary px-5 mx-3 float-end'
        >
          Saqlash
        </button>
        <button onClick={()=>setstate1(false)} className='btn btn-secondary float-end'>Chiqish</button>
      </div>
    </div>
  );
};

export default connect(null, { addEmployee })(Xodimlar_add);
