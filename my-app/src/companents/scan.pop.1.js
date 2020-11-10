import React, { useState } from 'react';
import Modal from './modal';
import ScanDocs2 from './scan.pop.2';
import ScanDocs3 from './scan.pop.3';


const ScanDocs1 = (props) => {
    const { currentScan, setCurrentScan } = props;

    // переход на второй попап
    const [openScan1, setOpenScan1] = useState(false);
    function goToScan1() {
        setOpenScan1(true);
    }

    return (  
        <div className='scanPasPage page modal'>
            {openScan1 && <Modal>
                { (currentScan === 'Паспорт') ? <ScanDocs2 currentScan={currentScan} setCurrentScan={setCurrentScan}/> : <ScanDocs3 currentScan={currentScan} setCurrentScan={setCurrentScan}/> }
            </Modal> }
            { (currentScan === 'Паспорт') && <h3>Сначала отсканируйте первую страницу паспорта</h3> }
            <h3 className='orange-box'>pasport foto and text balblabla</h3>
            <button className='btnWhole btnText' onClick={goToScan1}>Сканировать</button>
        </div>
    );
}
 
export default ScanDocs1;