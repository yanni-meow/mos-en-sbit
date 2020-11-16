import React from 'react';
import GlobalState from '../pullstate';
import { authentification, identification, sentScanDocs } from './API';

const ApiRoute = () => {
  const {
    isLoading, total, success, connectionError, session, countNumber, userAddress, docId,
  } = GlobalState.useState((s) => s.mainApiData);

  return (
    <div className="page">

      <button className="btnHalf btnText" onClick={async () => { await authentification(); }}>autentif</button>
      <button className="btnHalf btnText" onClick={async () => { await identification(session, countNumber); }}>identif</button>
      <button className="btnHalf btnText" onClick={async () => { await sentScanDocs(session, docId); }}>scandocs</button>

    </div>
  );
};
export default ApiRoute;
