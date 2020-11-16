import React from 'react';
import { Link } from 'react-router-dom';

const Errors = (props) => {
  const { isScanError, isOperatorError } = props;

  const errors = {
    anotherDoc: <div className="error-text">
      Нецелевой документ.
      <h5>Просьба проверить на соответсвие документ.</h5>
      <button className="btnHalf btnText" style={{ margin: '0 auto' }} onClick={() => {}}> Сканировать </button>
    </div>,

    badScan: <div className="error-text">
      Плохое качество сканирования.
      <h5>Просьба отсканировать документ ещё раз.</h5>
      <button className="btnHalf btnText" style={{ margin: '0 auto' }} onClick={() => {}}> Сканировать </button>
    </div>,

    buildError: <div className="error-text">
      Ошибка сборки документа.
      <h5>
        Отсутствиет полное количество страниц.
        <br />
        {' '}
        Просьба отсканировать документ ещё раз.
      </h5>
      <button className="btnHalf btnText" style={{ margin: '0 auto' }} onClick={() => {}}> Сканировать </button>
    </div>,

    noCorrect: <div className="error-text" style={{ height: '30vh', fontWeight: '600' }}>
      Не удалось исправить ошибки при сканировании.
      {' '}
      <br />
      {' '}
      Ваша заявка сохранена.
      {' '}
      <br />
      {' '}
      Свяжитесь с оператором или он свяжется с Вами по указанным ранее контактным данным.
      {' '}
      <br />
      {' '}
      Приносим свои извинения.
      <button className="btnWhole btnText" style={{ margin: '0 auto' }} onClick={() => {}}> Связаться с оператором </button>
    </div>,

    noOperator: <>
      {' '}
      <div className="error-text">
        В данный момент все операторы заняты.
        <h5 style={{ padding: '2vh 0' }}>Ваши данные были внесены в систему</h5>
        <h5>
          Попробуйте совершить звонок оператору позднее.
          <br />
          {' '}
          Либо дождитесь когда оператор свяжется с Вами по указанному номеру.
        </h5>
      </div>
      <Link to="/home" className="btnHalf btnText" style={{ margin: '0 auto' }}> Назад </Link>
    </>,

  };

  return (
    <div className="modal">
      <div className="error-text">
        {(isOperatorError && errors.noOperator)}
      </div>
    </div>
  );
};

export default Errors;
