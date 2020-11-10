import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import bill from '../images/bill.png';
import point from '../images/gps.png';
import video from '../images/video.png';

const Screen31 = () => {

    const [wrongData, setWrongData] = useState(false);

    function errorCheck() {
        // history.push('/');
        // setWrongData(true);
    }

    return (  
        <div className='lgotPage page'>
            <h1>Открытие, переоформление льгот</h1>

            { wrongData ? 
            <> <h2>Не верно введённые данные </h2>
            <div className='error-text'>
                Если указанные данные не верны, <br />
                свяжитесь с оператором.
            </div> 
            <Link to='/' className='btnWhole'><img className='btnIcon' src={ video } /><p className='btnText'>Связаться с оператором</p></Link>
            </>
            : 
            <> <h4>Подтвердите правильность адреса. <br/>
                    Если адрес указан верно, нажмите «Далее». <br/>
                    Если адрес указан неверно, нажмите «Назад» и проверьте, правильно ли введен номер лицевого счета.</h4>
                <div  className='lgot__confirm-address__box'>
                    <div className='lgot__confirm-address__item'>
                        <img src={ bill } />
                        <p className='orange-text'>Лицевой счёт: </p>
                        <h3> 1234567890 {} </h3>
                    </div>
                    <div className='lgot__confirm-address__item'>
                        <img src={ point } />
                        <p className='orange-text'>Адрес: </p>
                        <h3> г. Москва, Центральный проезд Серебрянного Бора, д. 152, кв. 321 {} </h3>
                    </div>
                </div>
                <Link to='/2.1' className='btnHalf'><p className='btnText'>Назад</p></Link>
                <button onClick={errorCheck} className='btnHalf'><p className='btnText'>Далее</p></button> 
            </> }
        </div>
    );
}
 
export default Screen31;