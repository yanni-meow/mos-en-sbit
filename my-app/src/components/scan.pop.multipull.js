import React from 'react';
import GlobalState, { updateMainButtonsStatus, updateDopButtonsStatus } from '../pullstate';
import { sentScanDocs } from '../utils/API';

const ScanDocsMulti = (props) => {
  const { suvkDocId, setSuvkDocId, renderBtnId } = props;
  const lgotType = GlobalState.useState((s) => s.lgotType);
  const {
    session,
  } = GlobalState.useState((s) => s.mainApiData);

  // // переход на третий попап
  // const [openScan2, setOpenScan2] = useState(false);
  // function goToScan2() {
  //   setOpenScan2(true);
  // }

  function goToScan3() {
    console.log('сканируем - сканируем');
  }

  function nextScan() {
    updateMainButtonsStatus(lgotType, renderBtnId);
    updateDopButtonsStatus(lgotType, renderBtnId);

    // завершение попапов
    setSuvkDocId(false);
  }

  return (
    <div className="scanPasPage page modal">
      {(suvkDocId === 3) ? (
        <>
          <h3>
            Проверьте, пожалуйста, успешность сканирования.
            <br />
            Если качество сканирования устраивает, нажмите "Принять".
          </h3>
          <h3 className="orange-box">
            pasport here
          </h3>
          <button className="btnHalf btnText" onClick={() => { setSuvkDocId(false); }}>Повторить</button>
          <button className="btnHalf btnText" onClick={() => { setSuvkDocId('Паспорт'); }}>Принять</button>
        </>
      ) : (
        <>
          {(suvkDocId === 3)
            ? <h3> Положите, пожалуйста, страницу с пропиской на сканер </h3>
            : <h3> Положите, пожалуйста, документ на сканер </h3>}
          <h3 className="orange-box">
            pasport here
          </h3>
          <button className="btnThird btnText" onClick={goToScan3}>Повторить</button>
          <button className="btnThird btnText" onClick={goToScan3}>Начать</button>
          <button className="btnThird btnText" style={{ background: 'linear-gradient(#f6a439, #d88312)' }} onClick={() => { sentScanDocs(session, suvkDocId); nextScan(renderBtnId); }}>Принять</button>
        </>
      )}

      {/* {openScan2 && (
      <Modal>
        <ScanDocsSingle currentScan={currentScan} setCurrentScan={setCurrentScan} />
      </Modal>
      ) } */}

    </div>
  );
};

export default ScanDocsMulti;
