import React, { useState } from 'react';
import GlobalState from '../pullstate';
import ConnectionError from './2.2.suvk_error';
import RegisterRequest from './9.4.regisration';
import Modal from './modal';
import ScanDocs1 from './scan.pop.1.js';

const Screen92 = () => {

    const dopDocumentsList = GlobalState.useState(s => s.dopDocumentsList);
    const lgotType = GlobalState.useState(s => s.lgotType);
    let btnList = GlobalState.useState(s => s.dopDocumentsList[`${lgotType}Dop`].doclist);

    // ошибки
    const [isNoConnect, setIsNoConnect] = useState(false);
    const [isScanError, setIsScanError] = useState({
        anotherDoc: false,
        badScan: false,
        buildError: false,
        noCorrect: false,
    })
    
    const [isRequestStatus, setIsRequestStatus] = useState({
        isLoading: false,
        requestDone: false,
        downloadError: false,
    })
    
    async function fetchData() {
        try {
            setIsRequestStatus((oldValue) => ({...oldValue, isLoading: true }))
            // await обращение к апи
            setIsRequestStatus((oldValue) => ({...oldValue, isLoading: false, requestDone: true }))

        } catch (error) {
            setIsRequestStatus((oldValue) => ({...oldValue, isLoading: false, downloadError: true }))
        }
    }

    // для рендера кнопок
    const toRender = () => {
        return (
            dopDocumentsList[`${lgotType}Dop`].doclist.map((doc) => {

                return (
                    <div className='scan-page__item'>
                        <h3>{doc.name}</h3>
                        <button name={doc.name} className='btnMini btnText' onClick={() => {goToScan(doc.name)}} style={{background: doc.scaned && 'linear-gradient(#f6a439, #d88312)'}}> Сканировать </button>
                    </div>
                )
            })
        )
    }

    // переход на сканирование или регистрацию
    const [currentScan, setCurrentScan] = useState(false);
    function goToScan(doctype) {
        setCurrentScan(doctype);
    }
   
    // проверка готовности ХОТЯ БЫ ОДНОГО скана 

    const [toRegistraion, setToRegistration] = useState(false);

    function checkScans( el ) {
        return el.scaned === true; 
    }
    const nextWindow = () => {
        if (btnList.some(checkScans) === true) {
            fetchData();
            setToRegistration(true);
        }
    }
    setTimeout(nextWindow, 2000);

    return (  
        <div className='skan-page page'>
            { (currentScan || toRegistraion) && <Modal> {
                toRegistraion ?
                < RegisterRequest isRequestStatus={isRequestStatus} /> :
                <ScanDocs1 currentScan={currentScan} setCurrentScan={setCurrentScan}/> }
            </Modal> }
            <h1>Открытие, переоформление льгот</h1>

            { isNoConnect ? <ConnectionError /> :
            
            <><div>
                <h2>{dopDocumentsList[`${lgotType}Dop`].title}</h2>
                <h6>Отсканируте один из документов, имеющийся в наличии</h6>
            </div>
            <div className='orange-box skan-page__box' style={{ marginBottom: '12vh'}}>
                {toRender()}
            </div></> 
            
            }
        </div>
    );
}
 
export default Screen92;