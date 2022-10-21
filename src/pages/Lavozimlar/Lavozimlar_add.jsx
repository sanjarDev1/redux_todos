import React, { useState } from 'react';
import { addPosition } from '../../redux/action';
import { connect } from 'react-redux';

const Lavozimlar_add = ({ addPosition, setfirst }) => {
  const [state, setstate] = useState({ name: '', selry: '' });

  return (
    <div className='card'>
      <div className='card-header'>
        <h3> Lavozim qo'shish</h3>
      </div>
      <div className='card-body p-4 '>
        <input
          value={state.name}
          type='text'
          onChange={({ target }) => setstate({ ...state, name: target.value })}
          className='form-control my-2'
          placeholder='Nomi'
        />
        <input
          value={state.selry}
          type='number'
          onChange={({ target }) => setstate({ ...state, selry: target.value })}
          class='form-control'
          placeholder='Maosh'
        />
      </div>
      <div className='card-footer '>
        <button
          className='btn btn-primary px-5 mx-3 float-end'
          onClick={() => {
            addPosition(state);
            setstate({ name: '', selry: '' });
            setfirst(false);
          }}
        >
          Saqlash
        </button>
        <button
          onClick={() => setfirst(false)}
          className='btn btn-secondary float-end'
        >
          Chiqish
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addPosition })(Lavozimlar_add);
