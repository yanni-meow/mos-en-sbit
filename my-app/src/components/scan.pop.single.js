import React from 'react';
import GlobalState, { updateMainButtonsStatus, updateDopButtonsStatus } from '../pullstate';
import { sentScanDocs } from '../utils/API';

const ScanDocsSingle = (props) => {
  const {
    suvkDocId, setSuvkDocId, renderBtnId, nextScanMain, nextScanDop,
  } = props;
  const lgotType = GlobalState.useState((s) => s.lgotType);
  const { session } = GlobalState.useState((s) => s.mainApiData);

  // зачёт сканированных доков и разблокировка следующих
  function goToScan3() {
    console.log('сканируем - сканируем');
  }

  // function nextScan() {
  //   updateMainButtonsStatus(lgotType, renderBtnId);
  //   updateDopButtonsStatus(lgotType, renderBtnId);
  //   // завершение попапов
  //   setSuvkDocId(false);
  // }

  return (
    <div className="scanPasPage page modal">
      {/* <h3> Положите, пожалуйста, страницу с пропиской на сканер </h3> */}
      <h3> Положите, пожалуйста, документ на сканер </h3>
      <h3 className="orange-box">
        pasport here
      </h3>
      <button className="btnThird btnText" onClick={goToScan3}>Повторить</button>
      <button className="btnThird btnText" onClick={goToScan3}>Начать</button>
      <button className="btnThird btnText" style={{ background: 'linear-gradient(#f6a439, #d88312)' }} onClick={() => { sentScanDocs(session, suvkDocId); nextScanMain(renderBtnId); }}>Принять</button>
    </div>
  );
};

export default ScanDocsSingle;
