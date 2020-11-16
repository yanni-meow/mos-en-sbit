import React, { useState } from 'react';
import Modal from './modal';
import ScanDocsMulti from './scan.pop.multipull';
import ScanDocsSingle from './scan.pop.single';

const ScanDocsInfo = (props) => {
  const {
    suvkDocId, setSuvkDocId, multipullScan, renderBtnId, nextScanMain, nextScanDop,
  } = props;

  // переход на второй попап
  const [openScan1, setOpenScan1] = useState(false);
  function goToScan1() {
    setOpenScan1(true);
  }

  return (
    <div className="scanPasPage page modal">
      {openScan1 && (
      <Modal>
        { (multipullScan === true)
          ? <ScanDocsMulti suvkDocId={suvkDocId} setSuvkDocId={setSuvkDocId} renderBtnId={renderBtnId} nextScanMain={nextScanMain} nextScanDop={nextScanDop} />
          : <ScanDocsSingle suvkDocId={suvkDocId} setSuvkDocId={setSuvkDocId} renderBtnId={renderBtnId} nextScanMain={nextScanMain} nextScanDop={nextScanDop} />}
      </Modal>
      ) }
      { (suvkDocId === 3) && <h3>Сначала отсканируйте первую страницу паспорта</h3> }
      <h3 className="orange-box">pasport foto and text balblabla</h3>
      <button className="btnWhole btnText" onClick={goToScan1}>Сканировать</button>
    </div>
  );
};

export default ScanDocsInfo;
