import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nullstyle.css';
import '../styles/defoltstyle.css';
import '../styles/wrapper.css';
import '../styles/screensstyles.css';

import logo from '../images/logo.png'
import homeIcon from '../images/home.png';

const Wrapper = ( {children} ) => {

    const url = window.location.href;

    return (  
        <div className='wrapperBox'>
            <section className='wrapperBox__top'>
                <div className='wrapperBox__top__logo'> <img src={logo} /></div>
                <div className='wrapperBox__top__clock'></div>
            </section>
            <section className='wrapperBox__content'>
                { children }
            </section>
            <section className='wrapperBox__bottom'>
                {(url.indexOf('/home') === -1) &&
                <Link to='/home' className='btnHomeRun' >
                    <img src={ homeIcon } />
                </Link>
                }
                <div className='wrapperBox__bottom__contact'>
                    <p>+7 (499) 550-9-550</p>
                    <p>www.mosenergosbyt.ru</p>
                </div>
            </section>
        </div>
    );
}
 
export default Wrapper;