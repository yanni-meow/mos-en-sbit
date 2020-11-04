import React from 'react';
import { Link } from 'react-router-dom';
import video from '../images/video.png';
import card from '../images/personal-card.png';
import list from '../images/list.png';
import info from '../images/info.png';
import education from '../images/education.png';


const Home = () => {
    return (  
        <div className='homePage page'>
            <h1>Выберите услугу</h1>
            <Link to='/' className='btnVideoCall'><img className='btnIcon' src={ video } /><p className='btnText'>Видеозвонок</p></Link>
            <Link to='/1.2' className='btnHome'><img className='btnIcon' src={ list } /><p className='btnText'>Открытие, переоформление, закрытие льгот</p></Link>
            <Link to='/' className='btnHome'><img className='btnIcon' src={ card } /><p className='btnText'>Изменение данных владельца лицевого счёта</p></Link>
            <Link to='/' className='btnHome'><img className='btnIcon' src={ info } /><p className='btnText'>Информация</p></Link>
            <Link to='/' className='btnHome'><img className='btnIcon' src={ education } /><p className='btnText'>Инструкция</p></Link>
        </div>
    );
}
 
export default Home;