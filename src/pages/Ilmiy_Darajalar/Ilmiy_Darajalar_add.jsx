import { useState } from 'react';
import { connect } from 'react-redux';
import { addDegree } from '../../redux/action';

const Ilmiy_Darajalar_add = ({ addDegree, setstate }) => {
  const [first, setfirst] = useState({ name: '', bonus: '' });
  return (
    <div className='card'>
      <div className='card-header'>
        <h3> Daraja qo'shish</h3>
      </div>
      <div className='card-body p-4 '>
        <input
          value={first.name}
          type='text'
          onChange={({ target }) => setfirst({ ...first, name: target.value })}
          className='form-control my-2'
          placeholder='Nomi'
        />
        <input
          value={first.bonus}
          type='number'
          onChange={({ target }) => setfirst({ ...first, bonus: target.value })}
          class='form-control'
          placeholder='Bonus'
        />
      </div>
      <div className='card-footer '>
        <button
          className='btn btn-primary px-5 mx-3 float-end'
          onClick={() => {
            addDegree(first);
            setfirst({ name: '', bonus: '' });
            setstate(false);
          }}
        >
          Saqlash
        </button>
        <button
          onClick={() => setstate(false)}
          className='btn btn-secondary float-end'
        >
          Chiqish
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addDegree })(Ilmiy_Darajalar_add);
