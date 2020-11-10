import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import GlobalState from '../pullstate';
import ConnectionError from './2.2.errors';
import Keyboard from './keyboard';
import Modal from './modal';
import ScanDocs1 from './scan.pop.1.js'


const Screen91 = () => {

    const docList = GlobalState.useState(s => s.documentsList);
    const lgotType = GlobalState.useState(s => s.lgotType);
    const [isNoConnect, setIsNoConnect] = useState(false);


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
                        <button name={doc.name} className='btnMini btnText' onClick={() => {goToScan(doc.name)}} disabled={doc.desable} style={{background: doc.scaned && 'linear-gradient(#f6a439, #d88312)'}}> Сканировать </button>
                    </div>
                )
            })
        )
    }
    // disabled={doc.desable}

    const [currentScan, setCurrentScan] = useState(false);

    function goToScan(doctype) {
        setCurrentScan(doctype);
    }

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