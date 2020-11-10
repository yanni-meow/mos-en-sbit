import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalState, { updateButtonsStatus } from '../pullstate';
import ConnectionError from './2.2.errors';
import Modal from './modal';
import ScanDocs1 from './scan.pop.1.js';

const Screen92 = () => {

    const history = useHistory();
    const dopDocList = GlobalState.useState(s => s.dopDocList);
    const lgotType = GlobalState.useState(s => s.lgotType);
    let btnList = GlobalState.useState(s => s.dopDocList[lgotType].doclist);

    // ошибки
    const [isNoConnect, setIsNoConnect] = useState(false);
    const [isScanError, setIsScanError] = useState({
        anotherDoc: false,
        badScan: false,
        buildError: false,
        noCorrect: false,
    })

    // для рендера кнопок
    const toRender = () => {
        return (
            dopDocList[lgotType].doclist.map((doc) => {

                return (
                    <div className='scan-page__item'>
                        <h3>{doc.name}</h3>
                        <button name={doc.name} className='btnMini btnText' onClick={() => {goToScan(doc.name)}} style={{background: doc.scaned && 'linear-gradient(#f6a439, #d88312)'}}> Сканировать </button>
                    </div>
                )
            })
        )
    }

    const [currentScan, setCurrentScan] = useState(false);
    function goToScan(doctype) {
        setCurrentScan(doctype);
    }

// зачёт сканированных доков!!!!!!!

    // проверка готовности ХОТЯ БЫ ОДНОГО скана 
    // function checkScans( el ) {
    //     return el.scaned === true; 
    // }
    // const nextWindow = () => {
    //     if (btnList.some(checkScans) === true) {
    //         history.push('/5.1')
    //     }
    // }
    // setTimeout(nextWindow, 2000);

    return (  
        <div className='skan-page page'>
            { currentScan && <Modal>
                { <ScanDocs1 currentScan={currentScan} setCurrentScan={setCurrentScan}/>  }
            </Modal> }
            <h1>Открытие, переоформление льгот</h1>

            { isNoConnect ? <ConnectionError /> :
            
            <><div>
                <h2>{dopDocList[lgotType].title}</h2>
                <h6>Отсканируте один из документов, имеющийся в наличии</h6>
            </div>
            <div className='orange-box skan-page__box' style={{    marginBottom: '12vh'}}>
                {toRender()}
            </div></> 
            
            }
        </div>
    );
}
 
export default Screen92;