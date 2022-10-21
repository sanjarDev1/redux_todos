import React, { useState } from 'react';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import { ReactComponent as Kres } from '../../assets/x.svg';
import { connect } from 'react-redux';
import Ilmiy_Darajalar_add from './Ilmiy_Darajalar_add';
import { removeDegree } from '../../redux/action';

const Ilmiy_Darajalar = ({ degreeReducers, removeDegree }) => {
  const [state, setstate] = useState(false);
  return (
    <div className='container '>
      <div className='row'>
        <div className={`col-md-${state?'8':'12'} `}>
          <div className='card '>
            <div className='card-header p-4 d-flex justify-content-around align-items-center'>
              <input
                style={{ height: '30px', width: '140px' }}
                type='text'
                className='form-control'
                placeholder='search...'
              />
              <h3>Ilmiy darajalar</h3>
              <button
                onClick={() => setstate(true)}
                className='btn btn-success'
              >
                + Add
              </button>
            </div>
            <div className='card-body'>
              <div className='col-md-8'>
                <table className='table mx-5'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nomi</th>
                      <th>Bonus</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {degreeReducers.map(({ id, name, bonus }) => (
                      <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{bonus}</td>
                        <td>
                          <Pen
                            style={{ height: '20px', marginRight: '10px' }}
                          />
                          <Kres onClick={() => removeDegree(id)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>{state && <Ilmiy_Darajalar_add setstate={setstate} />}</div>
      </div>
    </div>
  );
};

export default connect(({ degreeReducers }) => ({ degreeReducers }), {
  removeDegree,
})(Ilmiy_Darajalar);
