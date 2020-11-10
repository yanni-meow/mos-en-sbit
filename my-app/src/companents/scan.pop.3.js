import React from 'react';
import { Link } from 'react-router-dom';
import GlobalState, { updateButtonsStatus } from '../pullstate';

const ScanDocs3 = (props) => {
    const { currentScan, setCurrentScan } = props;

    const lgotType = GlobalState.useState(s => s.lgotType);

    // зачёт сканированных доков и разблокировка следующих
    let docId = () => {
        if(currentScan === 'Паспорт') {
            return 0            
        } else if (currentScan === 'СНИЛС') {
            return 1            
        } else if (currentScan === 'Удостоверение «Ветеран труда»') {
            return 2            
        } else {
            return 3            
        }
    }
    function nextScan(n) {
        updateButtonsStatus(lgotType, docId());
        // завершение попапов
        setCurrentScan(false);
    }

    return (  
        <div className='scanPasPage page modal'>
            {( currentScan === 'Паспорт') ?
            <h3> Положите, пожалуйста, страницу с пропиской на сканер </h3> :
            <h3> Положите, пожалуйста, документ на сканер </h3>}

            <h3 className='orange-box'>
                pasport here
            </h3>
            <Link to='/9.2' className='btnHalf btnText' >Повторить</Link>
            <button className='btnHalf btnText' onClick={() => {nextScan(docId())}} >Принять</button>
        </div>
    );
}
 
export default ScanDocs3;