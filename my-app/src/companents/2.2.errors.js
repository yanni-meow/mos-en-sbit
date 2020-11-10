import React from 'react';

const ConnectionError = () => {

    // const errors = {
    //     noConnection: <div className=''> СУВК не оттвечает. <br/>  Просьба обратиться позднее. <br/>  Приносим свои извинения! <br/> </div>  
    // }

    return (  
        <div className='error-text' style={{
            minHeight: '30vh'}}> СУВК не оттвечает. <br/>  Просьба обратиться позднее. <br/>  Приносим свои извинения!</div>  
    );
}
 
export default ConnectionError;