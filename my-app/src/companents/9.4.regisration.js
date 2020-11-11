import React from 'react';
import { Link } from 'react-router-dom';
import video from '../images/video.png';

const registrRequest = () => {

    const requestStatus = {
        waiting: <>
            <div className='registration-box' style={{height:'23vh'}}>
                <h5>Дождитесь регистрации Вашкй заявки.<br/> Это займёт не более 1 минуты.</h5>
                <h5 style={{color: '#49567c', padding:'2vh 0'}}>Ожидание:</h5>
                <h5 className='orange-text' id='waitingTimer'> 0:24 секунды </h5>
            </div>
            <div id='commercial' style={{height:'40vh', width:'95vw'}}>
                тут реклама
            </div> </>,

        requestDone: <>
            <div  className='registration-box' style={{height:'50vh'}}>
                <h5 className='orange-text'>Ваша обращение зарегистрировано <br/> № <span id='requestNumber'>________</span></h5>
                <h5>Информация по итогам рассмотрения Вашей заявки будет<br/> направлена на электронную почту (если при оформлении заявки Вы указали её).<br/> В случае необходимости оператор свяжется с Вами по указанному контактному телефону.</h5>
                <h5>Благодаримза обращение в АО "Мосэнергосбыт".</h5>
            </div></>,

        downloadError: 
            <div className='registration-box'  style={{height:'35vh', marginTop: '15vh'}}> 
                <div className='error-text'  style={{minHeight:'0'}}> 
                    Произошла техническая ошибка. 
                    <h5>Чтобы узнать статус заявки, обратитесь к оператору Контактного Центра.</h5>
                </div>
                <Link to='/videocall' className='btnWhole btnText'> <img className='btnIcon' src={ video }/> Связаться с оперетором </Link>
            </div>

}

    return ( 
        <div className='modal' style={{ flexDirection: 'column', textAlign:'center' }}>
            {requestStatus.waiting}
        </div>
     );
}
 
export default registrRequest;