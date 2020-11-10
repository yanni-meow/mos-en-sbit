import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Errors from './9.3.errors';
import Modal from './modal';

const VideoCall = () => {
    const [isOperatorError, setIsOperatorError] = useState(true);

    return ( 
        <div className='videocall-page page'>

            { isOperatorError && <Modal>
                { <Errors isOperatorError={isOperatorError} setIsOperatorError={setIsOperatorError}/>  }
            </Modal> }

            <h1>Видеозвонок</h1>
            <div className='orange-box' id='videocall-window'>

            </div>
            <Link to='/home' className='btnHalf btnText' style={{background: 'red'}}>Завершить звонок</Link>
        </div>
    );
}
 
export default VideoCall;