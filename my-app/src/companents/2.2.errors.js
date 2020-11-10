import React from 'react';

const ConnectionError = () => {

    // const errors = {
    //     noConnection: <div className=''> СУВК не оттвечает. <br/>  Просьба обратиться позднее. <br/>  Приносим свои извинения! <br/> </div>  
    // }

    return (  
        <div className='error-text' style={{ height: '30vh', fontWeight: '600'}}> СУВК не оттвечает. <br/>  Просьба обратиться позднее. <br/>  Приносим свои извинения! <br/> </div>  
    );
}
 
export default ConnectionError;