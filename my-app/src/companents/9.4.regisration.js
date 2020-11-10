import React from 'react';
import video from '../images/video.png';

const registrRequest = () => {

    const requestStatus = {
        waiting: <>
            <div style={{height:'37vh'}}>
                <h5>Дождитесь регистрации Вашкй заявки.<br/> Это займёт не более 1 минуты</h5>
                <h5 style={{color: '#49567c'}}>Ожидание:</h5>
                <h5 className='orange-text' id='waitingTimer'> 0:24 секунды </h5>
            </div>
            <div id='commercial' style={{height: '36vh'}}>
                тут реклама
            </div> </>,

        requestDone: <>
            <h5  className='orange-text'>Ваша обращение зарегистрировано <br/> № <span id='requestNumber'>________</span></h5>
            <h5>Информация по итогам рассмотрения Вашей заявки будет<br/> направлена на электронную почту (если при оформлении заявки Вы указали её).<br/> В случае необходимости оператор свяжется с Вами по указанному контактному телефону.</h5>
            <h5>Благодаримза обращение в АО "Мосэнергосбыт".</h5></>,

        downloadError: 
            <div className='error-text' style={{ height: '30vh', fontWeight: '600'}}> 
                Произошла техническая ошибка. 
                <h5>Чтобы узнать статус заявки, обратитесь к оператору Контактного Центра.</h5>
                <button className='btnWhole btnText' onClick={() => {}}> <img className='btnIcon' src={ video }/> Связаться с оперетором </button> 
            </div>, 
    }

    return ( 
        <div className='modal'>
            
        </div>
     );
}
 
export default registrRequest;