import React, { useState } from 'react';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import { ReactComponent as Kres } from '../../assets/x.svg';
import Lavozimlar_add from './Lavozimlar_add';
import { connect } from 'react-redux';
import { removePosition } from '../../redux/action';

const Lavozimlar = ({ positionsReducer, removePosition }) => {
  const [first, setfirst] = useState(false);
  return (
    <div className='container '>
      <div className='row'>
        <div className={`col-md-${first ? '8' : '12'} `}>
          <div className='card '>
            <div className='card-header p-4 d-flex justify-content-around align-items-center'>
              <input
                style={{ height: '30px', width: '140px' }}
                type='text'
                className='form-control'
                placeholder='search...'
              />
              <h3>Lavozimlar </h3>
              <button onClick={()=>setfirst(true)} className='btn btn-success'>+ Add</button>
            </div>
            <div className='card-body'>
              <div className='col-md-8 '>
                <table className='table mx-5'>
                  <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Nomi</th>
                      <th scope='col'>Maosh</th>
                      <th scope='col'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {positionsReducer.map(({ id, name, selry }) => (
                      <tr>
                        <th>{id}</th>
                        <td>{name}</td>
                        <td>{selry}</td>
                        <td>
                          <Pen
                            style={{ height: '20px', marginRight: '10px' }}
                          />
                          <Kres onClick={() => removePosition(id)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          {first && <Lavozimlar_add setfirst={setfirst} />}
        </div>
      </div>
    </div>
  );
};

export default connect(({ positionsReducer }) => ({ positionsReducer }), {
  removePosition,
})(Lavozimlar);
