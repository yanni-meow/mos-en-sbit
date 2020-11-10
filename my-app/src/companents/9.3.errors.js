import React from 'react';

const ScanError = (props) => {
    // const {} = props;

    const errors = {
        anotherDoc: <div className='error-text' style={{ height: '30vh', fontWeight: '600'}}> 
        Нецелевой документ. 
        <h5>Просьба проверить на соответсвие документ.</h5> 
        </div>, 
        badScan: <div className='error-text' style={{ height: '30vh', fontWeight: '600'}}> 
        Плохое качество сканирования. 
        <h5>Просьба отсканировать документ ещё раз.</h5> 
        </div>,
        buildError: <div className='error-text' style={{ height: '30vh', fontWeight: '600'}}> 
        Ошибка сборки документа. 
        <h5>Отсутствиет полное количество страниц. <br/> Просьба отсканировать документ ещё раз.</h5> 
        </div>,
    }

    return (  
        <div className='error-text' style={{ height: '30vh', fontWeight: '600'}}> 
        
        </div>  
    );
}
 
export default ScanError;