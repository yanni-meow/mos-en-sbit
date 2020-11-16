import React from 'react';
import axios from 'axios';
import qs from 'qs';
import GlobalState, { updateConnectionStatus } from '../pullstate';
import bill from '../images/bill.png';

export const authentification = async () => {
  try {
    updateConnectionStatus({ isLoading: true, connectionError: false });

    const response = await axios({
      method: 'post',
      url: 'http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api',
      data: qs.stringify({
        action: 'auth',
        login: 'ASVK',
        pwd_password: 'vcDJ7FW6',
      }),
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
    });

    if (response.statusText === 'OK') {
      const { data: { data: { 0: responseData } } } = response;
      console.log('responseData === ', responseData);
      if (responseData.ns_kd_result === 0) {
        updateConnectionStatus({
          isLoading: false,
          success: true,
          session: responseData.session,
        });
      } else {
        updateConnectionStatus({ isLoading: false, errorCod: responseData.ns_kd_result });
      }
    } else {
      updateConnectionStatus({ isLoading: false, connectionError: true });
    }
  } catch (error) {
    updateConnectionStatus({ isLoading: false, connectionError: true });
  }
};

export const identification = async (session, countNumber) => {
  try {
    updateConnectionStatus({ isLoading: true, connectionError: false });
    const response = await axios({
      method: 'POST',
      url: 'http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cdb2.json.ps/json-api ',
      data: qs.stringify({
        query: 'IdentContractor',
        id_facility: 1,
        kd_tp_client: 1,
        session,
        nn_ls: '00003-003-00',
        // nn_ls: countNumber,
      }),
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
    });

    if (response.statusText === 'OK') {
      const { data: { data: { 0: responseData } } } = response;

      if (responseData.id_entity !== 0) {
        updateConnectionStatus({
          isLoading: false,
          success: true,
          total: responseData.total,
          userName: responseData.nm_first,
          userLastname: responseData.nm_last,
          userMiddlename: responseData.nm_middle,
          userAddress: responseData.nm_addr,
        });
      } else {
        updateConnectionStatus({ isLoading: false, errorCod: responseData.ns_kd_result });
      }
    } else {
      updateConnectionStatus({ isLoading: false, connectionError: true });
    }
  } catch (error) {
    console.log(' === ', error);
    updateConnectionStatus({ isLoading: false, connectionError: true });
  }
};

export const sentScanDocs = async (session, suvkDocId) => {
  try {
    updateConnectionStatus({ isLoading: true, connectionError: false });

    const formData = new FormData();
    formData.append('vl_doc', new Blob([bill], {
      type: 'text/csv',
    }));
    const response = await axios({
      method: 'POST',
      url: `http://kissh-test.mosenergosbyt.ru/osb_mes_test/ru.tii.crmcom_cnts2.json.ps/json-api?action=upload&query=UploadFile&id_doc_type=${suvkDocId}&session=${session}`,
      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('formData === ', formData);

    if (!response.data.err_code) {
      const { data: { data: { 0: responseData } } } = response;
      // const { data: responseData } = response;
      // console.log('responseData === ', responseData);
      if (response.data.kd_error === 0 || response.data.err_code === 0) {
        updateConnectionStatus({
          isLoading: false,
          success: true,
          total: response.data.total,
          idDociment: responseData.id_document,
          idFile: responseData.id_file,
        });

        // } else {
        //   updateConnectionStatus({ isLoading: false, errorScan: responseData.nm_error });
        //   setTimeout(() => {
        //     updateConnectionStatus({ isLoading: false, errorScan: '' });
        //   }, 5000);
      }
    }
  } catch (error) {
    console.log(' === ', error);
    updateConnectionStatus({ isLoading: false, connectionError: true });
  }
};
