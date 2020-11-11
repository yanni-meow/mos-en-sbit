import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalState from '../pullstate';
import ConnectionError from './2.2.errors';
import Modal from './modal';
import ScanDocs1 from './scan.pop.1.js'


const Screen91 = () => {

    const history = useHistory();
    const docList = GlobalState.useState(s => s.documentsList);
    const lgotType = GlobalState.useState(s => s.lgotType);
    let btnList = GlobalState.useState(s => s.documentsList[lgotType].doclist);

    // ошибки
    const [isNoConnect, setIsNoConnect] = useState(false);
    const [isScanError, setIsScanError] = useState({
        anotherDoc: false,
        badScan: false,
        buildError: false,
        noCorrect: false,
    })

    // для рендера кнопок
    function getText(text) {
        const arr = text.split(' ')
        if (arr.length > 4 ){
        
            return(
                <><h3>
                    {arr.slice(0, 2).join(' ')}
                    <h5 style={{width: '100%', textAlign: 'center'}}>
                        {arr.slice(2).join(' ')}
                    </h5>
                </h3></>
            )
    
        } else {
            return (
                <h3>{text}</h3>
            )
        }
    }
    const toRender = () => {
        return (
            docList[lgotType].doclist.map((doc) => {

                return (
                    <div className='scan-page__item'>
                        {getText(doc.name)}
                        <button name={doc.name} className='btnMini btnText' onClick={() => {goToScan(doc.name)}} disabled={doc.disable} style={{background: doc.scaned && 'linear-gradient(#f6a439, #d88312)'}}> Сканировать </button>
                    </div>
                )
            })
        )
    }

    // переход на нужный вид скана
    const [currentScan, setCurrentScan] = useState(false);
    function goToScan(doctype) {
        setCurrentScan(doctype);
    }

    // проверка готовности ВСЕХ сканов 
    function checkScans( el ) {
        return el.scaned === true; 
    }
    const nextWindow = () => {
        if (btnList.every(checkScans) === true) {
            history.push('/9.2')
        }
    }
    setTimeout(nextWindow, 2000);


    return (  
        <div className='skan-page page'>
            { currentScan && <Modal>
                { <ScanDocs1 currentScan={currentScan} setCurrentScan={setCurrentScan}/>  }
            </Modal> }
            <h1>Открытие, переоформление льгот</h1>
            
            { isNoConnect ? <ConnectionError /> :
            <><div>
                <h2>{docList[lgotType].title}</h2>
                <h6>Отсканируте документы</h6>
            </div>
            <div className='orange-box skan-page__box'>
                {toRender()}
            </div>
            <p className='orange-text' style={{textAlign:'center'}}>После сканирования основного пакета документов будет показан блок<br/> для сканирования одного из дополнительных документов:<br/> ЕЖД, выписка из домовой книги, копия ФЛС, карточка учёта</p></>
            }
        </div>
    );
}
 
export default Screen91;