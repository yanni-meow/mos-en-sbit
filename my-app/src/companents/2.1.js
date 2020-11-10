import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import KeyboardNum from './keyboard-num.js';
import ConnectionError from './2.2.errors';


// import Arrow from '../images/arrowL.png';
// import KeyboardNum from './keyboard-num';

const Screen2 = () => {
    const [value, setValue] = useState('');
    const history = useHistory();
        
        // Screen2.3
    const [wrongData, setWrongData] = useState(true);
    const [isNoConnect, setIsNoConnect] = useState(false);

    function errorCheck() {
        history.push('/3.1');
        // setIsNoConnect(true);
        // setWrongData(true);
    }

    return (  
        <div className='lgotPage page'>
            <div>
                <h1>Открытие, переоформление льгот</h1>
                <h2>Введите номер лицевого счёта</h2>
            </div>
            { isNoConnect ? <ConnectionError /> :

            <> {wrongData && <div>
                <h3 style={{color: 'red', width: '50vw', textAlign: 'center'}}>Введенный номер лицевого счёта не найден.</h3>
                <h3 style={{width: '50vw', textAlign: 'center', margin: '0 20vw'}}>Уточнить номер лицевого счёта можно у оперетора Контактного центра или посмотреть в квитанции на оплату электроэнергии.</h3>
            </div>}

            <div  className='num__form'>
                <div className={`num__box ${(wrongData) ? 'error-box' : 'orange-box'}`}>{ value }</div>
                <div> <KeyboardNum value={value} setValue={setValue}/> </div>
            </div>
            {wrongData ? <> <Link to='/videocall' className='btnHalf'><p className='btnText'>Связаться с оператором</p></Link> 
            <button onClick={ errorCheck } className='btnHalf'><p className='btnText'>Далее</p></button> </>
            : <button onClick={ errorCheck } className='btnWhole'><p className='btnText'>Далее</p></button> 
            } </>
            }
        </div>
    );
}
 
export default Screen2;