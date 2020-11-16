import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalState, { updateDopButtonsStatus, updateMainButtonsStatus } from '../pullstate';
import { ErrorList } from './API-errors';
import Modal from './modal';
import ScanDocsInfo from './scan.pop.info';

const Screen91 = () => {
  const history = useHistory();
  const docList = GlobalState.useState((s) => s.documentsList);
  const lgotType = GlobalState.useState((s) => s.lgotType);
  const btnList = GlobalState.useState((s) => s.documentsList[lgotType].mainDocList);

  // ошибки
  const [isNoConnect, setIsNoConnect] = useState(false);
  const [isScanError, setIsScanError] = useState({
    anotherDoc: false,
    badScan: false,
    buildError: false,
    noCorrect: false,
  });

  // стэйт документа сувк
  const [suvkDocId, setSuvkDocId] = useState(false);
  const [multipullScan, setMultipullScan] = useState(false);
  const [renderBtnId, setRenderBtnId] = useState(false);

  // переход на нужный вид скана
  function openScanPopup(suvkid, docmulti, renderid) {
    setSuvkDocId(suvkid);
    setMultipullScan(docmulti);
    setRenderBtnId(renderid);
  }

  // для рендера кнопок
  const toRender = () => (
    docList[lgotType].mainDocList.map((doc) => (
      <div className="scan-page__item" key={doc.id}>
        <h3>{doc.name}</h3>
        <button name={doc.name} className="btnMini btnText" onClick={() => { openScanPopup(doc.suvkDocType, doc.multipullScan, doc.id); }} disabled={doc.disable} style={{ background: doc.scaned && 'linear-gradient(#f6a439, #d88312)' }}> Сканировать </button>
      </div>
    ))
  );

  function nextScanMain() {
    updateMainButtonsStatus(lgotType, renderBtnId);
    // завершение попапов
    setSuvkDocId(false);
  }

  // проверка готовности ВСЕХ сканов
  function checkScans(el) {
    return el.scaned === true;
  }
  const nextWindow = () => {
    if (btnList.every(checkScans) === true) {
      history.push('/9.2');
    }
  };
  setTimeout(nextWindow, 2000);

  return (
    <div className="skan-page page">

      { suvkDocId && (
      <Modal>
        <ScanDocsInfo suvkDocId={suvkDocId} setSuvkDocId={setSuvkDocId} multipullScan={multipullScan} renderBtnId={renderBtnId} nextScanMain={nextScanMain} />
      </Modal>
      ) }

      <h1>Открытие, переоформление льгот</h1>

      { isNoConnect ? <ErrorList />
        : (
          <>
            <div>
              <h2>{docList[lgotType].title}</h2>
              <h6>Отсканируте документы</h6>
            </div>
            <div className="orange-box skan-page__box">
              {toRender()}
            </div>
            <p className="orange-text" style={{ textAlign: 'center' }}>
              После сканирования основного пакета документов будет показан блок
              <br />
              {' '}
              для сканирования одного из дополнительных документов:
              <br />
              {' '}
              ЕЖД, выписка из домовой книги, копия ФЛС, карточка учёта
            </p>
          </>
        )}
    </div>
  );
};

export default Screen91;

// // для рендера кнопок
// function getText(text) {
//   const arr = text.split(' ');
//   if (arr.length > 4) {
//     return (
//       <>
//         <h3>
//           {arr.slice(0, 2).join(' ')}
//           <h5 style={{ width: '100%', textAlign: 'center' }}>
//             {arr.slice(2).join(' ')}
//           </h5>
//         </h3>
//       </>
//     );
//   }
//   return (
//     <h3>{text}</h3>
//   );
// }
