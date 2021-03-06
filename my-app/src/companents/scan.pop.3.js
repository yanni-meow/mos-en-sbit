import React from 'react';
import GlobalState, { updateMainButtonsStatus, updateDopButtonsStatus } from '../pullstate';

const ScanDocs3 = (props) => {
    const { currentScan, setCurrentScan } = props;

    const lgotType = GlobalState.useState(s => s.lgotType);

    // зачёт сканированных доков и разблокировка следующих
    let docMainId = () => {
        if(currentScan === 'Паспорт') {
            return 0            
        } else if (currentScan === 'СНИЛС') {
            return 1            
        } else if (currentScan === 'Удостоверение «Ветеран труда»') {
            return 2            
        } else if (currentScan === 'Пенсионное удостоверение или иной документ, подтверждающий назначение пенсии') {
            return 3            
        }
    }

    let docDopId = () => {
        if(currentScan === 'ЕЖД') {
            return 0            
        } else if (currentScan === 'Выписка из домой книги') {
            return 1            
        } else if (currentScan === 'Копия ФЛС') {
            return 2            
        } else if (currentScan === 'Карточка учёта') {
            return 3            
        }
    }

    function nextScan(n) {
        updateMainButtonsStatus(lgotType, docMainId());
        updateDopButtonsStatus(`${lgotType}Dop`, docDopId());

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
            <button className='btnHalf btnText' onClick={() => {setCurrentScan(false)}} >Повторить</button>
            <button className='btnHalf btnText' onClick={() => {nextScan(docMainId()) || nextScan(docDopId())}} >Принять</button>
        </div>
    );
}
 
export default ScanDocs3;