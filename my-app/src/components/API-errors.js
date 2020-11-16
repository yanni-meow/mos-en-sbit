import React, { useState } from 'react';
import GlobalState from '../pullstate';
import { getError } from '../utils/api-cod-description';

export const ErrorList = ({ fetchData }) => {
  const { errorCod, connectionError } = GlobalState.useState((s) => s.errorApi);

  const [isOpen, setIsOpen] = useState(true);
  async function tryAgain() {
    setIsOpen(false);
    await fetchData();
  }

  const ConnectionError = () => (
    <div style={{ margin: '0 auto' }}>
      <div
        className="error-text"
        style={{ minHeight: '30vh', minWidht: '80vw' }}
      >
        СУВК не оттвечает.
        <br />
        Просьба обратиться позднее.
        <br />
        Приносим свои извинения!
      </div>
      <button className="btnWhole btnText" onClick={tryAgain}>
        Попробовать снова
      </button>
    </div>
  );

  return (
    isOpen && (
      <div className="page modal">
        <div className="error-text">
          { errorCod !== 0 && (
            <>
              <p>{getError(errorCod)}</p>
              <button className="btnWhole btnText" onClick={() => { setIsOpen(false); }}>Назад</button>
            </>
          )}

          { connectionError && ConnectionError()}
        </div>
      </div>
    )
  );
};
