import React, { useState } from 'react';
import ArrowL from '../images/arrowL.png';
import ArrowUp from '../images/arrowUp.png';
import Eath from '../images/global.png';

const Keyboard = (props) => {
  const {
    currentInput, setCurrentInput, dataState, setDataState,
  } = props;

  const [upCase, setUpCase] = useState(false);
  const [rusLanguage, setRusLanguage] = useState((currentInput !== 'emailState'));
  const [wrongData, setWrongData] = useState(false);

  function letKey(numb) {
    if (typeof numb !== 'object') {
      setDataState((oldDataState) => ({ ...oldDataState, [currentInput]: oldDataState[currentInput] + numb }));
    }
  }
  function delKey() {
    setDataState((oldDataState) => ({ ...oldDataState, [currentInput]: oldDataState[currentInput].substring(0, oldDataState[currentInput].length - 1) }));
  }
  function toUpCase() {
    setUpCase(!upCase);
  }
  function changeLanguage() {
    setRusLanguage(!rusLanguage);
  }

  const numbers = ['+', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, <img src={ArrowL} onClick={() => delKey(0)} />];

  const keys1 = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', <img src={ArrowL} onClick={() => delKey(0)} />];
  const keys2 = ['#', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '_'];
  const keys3 = ['$', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '"', '!'];
  const keys4 = [<img src={ArrowUp} onClick={toUpCase} />, 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '^', '/', '?', '{', '}'];
  const keys5 = ['%', '&', '*', <img src={Eath} onClick={() => changeLanguage()} />, ' ', '.', '@'];

  const keys2ru = ['#', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё'];
  const keys3ru = ['$', 'ы', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '"', "'"];
  const keys4ru = [<img src={ArrowUp} onClick={toUpCase} />, 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', ',', '?', '!'];

  function makeButtons(array) {
    let renderArray = array;
    if (upCase) {
      renderArray = array.map((key) => {
        if (typeof (key) === 'string') {
          return key.toUpperCase();
        }
        return key;
      });
    }
    return (
      renderArray.map((key) => (
        <button className="btnKey" onClick={() => letKey(key)}>
          {key}
        </button>
      ))
    );
  }

  return (

    <div className="keyboard modal">

      <div className={`keyboard__input ${(wrongData) ? 'error-box' : null}`}>
        {' '}
        { dataState[currentInput] }
        {' '}
      </div>

      { wrongData
                && <p className="error-text" style={{ minHeight: 'max-content' }}>Проверьте правильность ввода контактных данных и нажмите "Применить"</p>}

      <div className="keyboard__keys">

        { (currentInput === 'telState')
          ? (
            <>
              <div className="numbers">
                {makeButtons(numbers)}
              </div>
              <button className="btnHalf" onClick={() => { setCurrentInput(false); }} style={{ marginTop: '3vh', height: '10vh', width: '20vw' }}>
                <p className="btnText">Применить</p>
              </button>
            </>
          ) : (
            <>
              <div className="keyline keys1">
                {' '}
                {makeButtons(keys1)}
                {' '}
              </div>
              <div className="keyline keys2">
                {' '}
                {makeButtons(rusLanguage ? keys2ru : keys2)}
                {' '}
              </div>
              <div className="keyline keys3">
                {' '}
                {makeButtons(rusLanguage ? keys3ru : keys3)}
                {' '}
              </div>
              <div className="keyline keys4">
                {/* <button className={`btnKey ${(upCase) ? 'caps__on' : null}`} onClick={toUpCase}>
                            <img src={ ArrowUp } />
                        </button> */}
                {makeButtons(rusLanguage ? keys4ru : keys4)}
              </div>
              <div className="keyline keys5">
                {' '}
                {makeButtons(keys5)}
                <button className="btnKey" onClick={() => { setCurrentInput(false); }}>
                  Применить
                </button>
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default Keyboard;
