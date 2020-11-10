import React from 'react';
import { Link } from 'react-router-dom';
import GlobalState, { updateGlobalState } from '../pullstate';

const ScanDocs3 = (props) => {
    const { currentScan, setCurrentScan } = props;

    const lgotType = GlobalState.useState(s => s.lgotType);
    const documentsList = GlobalState.useState(s => s.documentsList[lgotType].doclist);

    let docId = () => {
        if(currentScan === 'Паспорт') {
            return 0            
        } else if (currentScan === 'СНИЛС') {
            return 1            
        } else if (currentScan == 'Ветеран труда') {
            return 2            
        } else {
            return 3            
        }
    }
    
    function nextScan(n) {
        setCurrentScan(false);
        // updateGlobalState({ documentsList[n].scaned: true });
        // updateGlobalState({ documentsList[(n+1)].desable: false });
        console.log(' === ', documentsList[n].scaned);
    }

    return (  
        <div className='scanPasPage page modal'>
            {( currentScan === 'Паспорт') ?
            <h3> Положите, пожалуйста, страницу с пропиской на сканер </h3> :
            <h3> Положите, пожалуйста, документ на сканер </h3>}

            <h3 className='orange-box'>
                pasport here
            </h3>
            <Link to='/9.2' className='btnHalf btnText'>Повторить</Link>
            <button className='btnHalf btnText' onClick={() => {nextScan(docId())}}>Принять</button>
        </div>
    );
}
 
export default ScanDocs3;