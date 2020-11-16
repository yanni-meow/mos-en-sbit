import React, { useState } from 'react';
import Keyboard from './keyboard';
import Modal from './modal';

const FioForm = (props) => {
  const { dataState, setDataState, toCloseWindow } = props;
  const [userInfo, setUserInfo] = useState({
    surname: '',
    name: '',
    patronymic: '',
  });
  const [currentInput, setCurrentInput] = useState(false);

  function openModal(input) {
    setCurrentInput(input);
  }

  const acceptUserInfo = () => {
    setDataState((oldDataState) => (
      {
        ...oldDataState,
        fioState: Object.values(userInfo).join(' '),
      }));
    toCloseWindow(false);
  };

  return (

    <div className="keyboard modal" style={{ justifyContent: 'center' }}>
      {currentInput && (
        <Modal>
          {' '}
          <Keyboard
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            dataState={userInfo}
            setDataState={setUserInfo}
          />
          {' '}

        </Modal>
      ) }

      <div className="fio__box fioform" style={{ margin: '5vh 0', width: '70vw' }}>
        <div className="fio__item">
          <h5>Фамилия</h5>
          <input className="fio__input" placeholder="Фамилия" value={userInfo.surname} onClick={() => { openModal('surname'); }} />
        </div>
        <div className="fio__item">
          <h5>Имя</h5>
          <input className="fio__input" placeholder="Имя" value={userInfo.name} onClick={() => { openModal('name'); }} />
        </div>
        <div className="fio__item">
          <h5>Отчетство</h5>
          <input className="fio__input" placeholder="Отчество" value={userInfo.patronymic} onClick={() => { openModal('patronymic'); }} />
        </div>
        <p className="orange-text" style={{ fontSize: '24px', margin: '0 auto' }}>Если у Вас нет отчетсва, поставьте символ "-"</p>
      </div>
      <div style={{ display: 'flex', width: '70vw', justifyContent: 'space-between' }}>
        <button onClick={() => toCloseWindow(false)} className="btnHalf"><p className="btnText">Назад</p></button>
        <button onClick={acceptUserInfo} className="btnHalf"><p className="btnText">Далее</p></button>
      </div>
    </div>

  );
};

export default FioForm;
