import React from 'react';
import { Link } from 'react-router-dom';


const Screen13 = () => {
    return (  
        <div className='persPage page'>
            <h1>Открытие, переоформление, закрытие льгот</h1>
            <h2>Выберите интересующую Вас услугу</h2>
            <Link to='/2.1' className='btnWhole'><p className='btnText'>Открытие, переоформление льгот</p></Link>
            <Link to='/' className='btnWhole'><p className='btnText'>Закрытие льгот</p></Link>
        </div>
    );
}
 
export default Screen13;