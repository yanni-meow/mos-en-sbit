import React, { useState } from 'react';
import GlobalState, { updateDopButtonsStatus } from '../pullstate';
import { ErrorList } from './API-errors';
import RegisterRequest from './9.4.regisration';
import Modal from './modal';
import ScanDocsInfo from './scan.pop.info';

const Screen92 = () => {
  const docList = GlobalState.useState((s) => s.documentsList);
  const lgotType = GlobalState.useState((s) => s.lgotType);
  const btnList = GlobalState.useState((s) => s.documentsList[lgotType].dopDocList);

  // ошибки
  const [isNoConnect, setIsNoConnect] = useState(false);
  const [isScanError, setIsScanError] = useState({
    anotherDoc: false,
    badScan: false,
    buildError: false,
    noCorrect: false,
  });

  const [isRequestStatus, setIsRequestStatus] = useState({
    isLoading: false,
    requestDone: false,
    downloadError: false,
  });

  async function fetchData() {
    try {
      setIsRequestStatus((oldValue) => ({ ...oldValue, isLoading: true }));
      // await обращение к апи
      setIsRequestStatus((oldValue) => ({ ...oldValue, isLoading: false, requestDone: true }));
    } catch (error) {
      setIsRequestStatus((oldValue) => ({ ...oldValue, isLoading: false, downloadError: true }));
    }
  }

  // стэйт документа сувк
  const [suvkDocId, setSuvkDocId] = useState(false);
  const [multipullScan, setMultipullScan] = useState(false);
  const [renderBtnId, setRenderBtnId] = useState(false);

  // переход на сканирование или регистрацию
  function openScanPopup(suvkid, docmulti, renderid) {
    setSuvkDocId(suvkid);
    setMultipullScan(docmulti);
    setRenderBtnId(renderid);
  }

  // для рендера кнопок
  const toRender = () => (
    docList[lgotType].dopDocList.map((doc) => {
      console.log('doc === ', doc);
      return (
        <div className="scan-page__item" key={doc.id}>
          <h3>{doc.name}</h3>
          <button name={doc.name} className="btnMini btnText" onClick={() => { openScanPopup(doc.suvkDocType, doc.multipullScan, doc.id); }} style={{ background: doc.scaned && 'linear-gradient(#f6a439, #d88312)' }}> Сканировать </button>
        </div>
      );
    })
  );

  function nextScanDop() {
    updateDopButtonsStatus(lgotType, renderBtnId);
    // завершение попапов
    setSuvkDocId(false);
  }

  // проверка готовности ХОТЯ БЫ ОДНОГО скана
  const [toRegistraion, setToRegistration] = useState(false);

  function checkScans(el) {
    return el.scaned === true;
  }
  const nextWindow = () => {
    if (btnList.some(checkScans) === true) {
      fetchData();
      setToRegistration(true);
    }
  };
  setTimeout(nextWindow, 2000);

  return (
    <div className="skan-page page">

      { (suvkDocId || toRegistraion) && (
      <Modal>
        { toRegistraion
          ? <RegisterRequest isRequestStatus={isRequestStatus} />
          : <ScanDocsInfo suvkDocId={suvkDocId} setSuvkDocId={setSuvkDocId} nextScanDop={nextScanDop} />}
      </Modal>
      ) }
      <h1>Открытие, переоформление льгот</h1>

      { isNoConnect ? <ErrorList />

        : (
          <>
            <div>
              <h2>{docList[lgotType].title}</h2>
              <h6>Отсканируте один из документов, имеющийся в наличии</h6>
            </div>
            <div className="orange-box skan-page__box" style={{ marginBottom: '12vh' }}>
              {toRender()}
            </div>
          </>
        )}

    </div>
  );
};

export default Screen92;
