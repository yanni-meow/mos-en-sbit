import React, { useState } from 'react';
import Modal from './modal';
import ScanDocs3 from './scan.pop.3';

const ScanDocs2 = (props) => {
    const { currentScan, setCurrentScan } = props;

    // переход на третий попап
    const [openScan2, setOpenScan2] = useState(false);
    function goToScan2() {
        setOpenScan2(true);
    }

    return (  
        <div className='scanPasPage page modal'>
            {openScan2 && <Modal>
                { <ScanDocs3 currentScan={currentScan} setCurrentScan={setCurrentScan}/> }
            </Modal> }
            <h3>
                Проверьте, пожалуйста, успешность сканирования.<br/> Если качество сканирования устраивает, нажмите "Принять".
            </h3>
            <h3 className='orange-box'>
                pasport here
            </h3>
            <button className='btnHalf btnText'>Повторить</button>
            <button className='btnHalf btnText' onClick={goToScan2}>Принять</button>
        </div>
    );
}
 
export default ScanDocs2;