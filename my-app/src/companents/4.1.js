import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Keyboard from './keyboard.js';
import Modal from './modal.js';

const Screen41 = () => {

    const [dataState, setDataState] = useState({
        fioState: '',
        telState: '',
        emailState: '', 
    });

    const [currentInput, setCurrentInput] = useState(false);

    function openModal(input) {
        setCurrentInput(input);
    }
    
    return (  
       <div className='fioPage page'>
            {currentInput && <Modal> { <Keyboard
             currentInput={currentInput} setCurrentInput={setCurrentInput} dataState={dataState} setDataState={setDataState}/> } </Modal> }
            <div>
                <h1>Открытие, переоформление льгот</h1>
                <h2>Введите контактные данные</h2>
            </div>
            <div className='fio__box'>
                <div className='fio__item'>
                    <h5>ФИО</h5>
                    <input className='fio__input' placeholder='Фамилия Имя Отчество' value={dataState.fioState} onClick={() => {openModal('fioState')}}/>
                </div>
                <div className='fio__item'>
                    <h5>Номер телефона</h5>
                    <input placeholder='+7 (___) ___-__-__' className='fio__input' value={dataState.telState} onClick={() => {openModal('telState')}}/>
                </div>
                <div className='fio__item'>
                    <h5>Электронная почта</h5>
                    <input placeholder='name@domain.ru' className='fio__input' value={dataState.emailState} onClick={() => {openModal('emailState')}}/>
                </div>
                <p className='orngText' style={{fontSize: '24px', margin: '0 auto'}}>Здесь и далее поля обозначенные символом "*" являются обязательными для заполнения</p>
            </div>
            <Link to='/3.1' className='btnHalf'><p className='btnText'>Назад</p></Link>
            <Link to='/' className='btnHalf'><p className='btnText'>Далее</p></Link>
        </div>
    );
}
 
export default Screen41;