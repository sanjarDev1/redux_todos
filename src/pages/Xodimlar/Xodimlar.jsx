import { ReactComponent as Pen } from '../../assets/pen.svg';
import { ReactComponent as Kres } from '../../assets/x.svg';
import { connect } from 'react-redux';
import Xodimlar_add from './Xodimlar_add';
import { removeEmployee } from '../../redux/action';
import { useState } from 'react';

const Xodimlar = ({ employeeReducer, removeEmployee }) => {
  const [state, setstate] = useState(false);
  return (
    <div className='container '>
      <div className='row'>
        <div className={`col-md-${state ? '8' : '12'} `}>
          <div className='card '>
            <div className='card-header p-4 d-flex justify-content-around align-items-center'>
              <input
                style={{ height: '30px', width: '140px' }}
                type='text'
                className='form-control'
                placeholder='search...'
              />
              <h3>Xodimlar</h3>
              <button onClick={()=>setstate(true)} className='btn btn-success'>+ Add</button>
            </div>
            <div className='card-body'>
              <div className='col-md-11 '>
                <table className='table mx-5'>
                  <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Ism</th>
                      <th scope='col'>Familiya</th>
                      <th scope='col'>Telefon</th>
                      <th scope='col'>Lavozim</th>
                      <th scope='col'>Ilmiy daraja</th>
                      <th scope='col'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeReducer.map(
                      ({ id, name, surname, phone, position, degree }) => (
                        <tr>
                          <th>{id}</th>
                          <td>{name}</td>
                          <td>{surname}</td>
                          <td>{phone}</td>
                          <td>{position}</td>
                          <td>{degree}</td>
                          <td>
                            <Pen
                              style={{ height: '20px', marginRight: '10px' }}
                            />
                            <Kres onClick={() => removeEmployee(id)} />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>{state && <Xodimlar_add setstate1={setstate} />}</div>
      </div>
    </div>
  );
};

export default connect(({ employeeReducer }) => ({ employeeReducer }), {
  removeEmployee,
})(Xodimlar);
