import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import GlobalState from '../pullstate';
import ConnectionError from './2.2.errors';
import Modal from './modal';
import ScanDocs1 from './scan.pop.1.js';

const Screen92 = () => {
    const dopDocList = GlobalState.useState(s => s.dopDocList);
    const lgotType = GlobalState.useState(s => s.lgotType);
    const [isNoConnect, setIsNoConnect] = useState(true);
    const [isScanError, setIsScanError] = useState({
        anotherDoc: false,
        badScan: false,
        buildError: false,
    })

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