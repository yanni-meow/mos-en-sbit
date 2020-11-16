import React from 'react';
import { Link } from 'react-router-dom';

const Screen12 = () => (
  <div className="persPage page">
    <h1>Обработка персональных данных</h1>
    <h3>
      Нажимая «Далее» вы даёте согласие
      <br />
      {' '}
      на обработку персональных данных в соотвествии с Федеральным законом
      <br />
      {' '}
      "О персональных данных" от 27.07.2006 N 152-ФЗ.
    </h3>
    <Link to="/home" className="btnHalf"><p className="btnText">Назад</p></Link>
    <Link to="/1.3" className="btnHalf"><p className="btnText">Далее</p></Link>
  </div>
);

export default Screen12;
