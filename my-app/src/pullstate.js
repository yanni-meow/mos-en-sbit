import { Store } from 'pullstate';

const GlobalState = new Store({
  mainApiData: {
    isLoading: false,
    success: false,
    total: 1,
    session: '',

    docId: 3,
    idDociment: 0,
    idFile: 0,
  },

  errorApi: {
    errorCod: 0,
    errorScan: '',
    connectionError: false,
  },

  userData: {
    countNumber: '00003-003-00',
    userName: '',
    userLastname: '',
    userMiddlename: '',
    userAddress: '',
    userPhone: '',
  },

  documentsLlll: [
    { suvkDocType: 7, name: 'СНИЛС' },
    { suvkDocType: 3, name: 'Паспорт' },
    { suvkDocType: 10, name: 'Справка ПФРФ о назначении пенсии' },
    { suvkDocType: 9, name: 'Свидетельство о смерти' },
    { suvkDocType: 118, name: 'Справка ВТЭК / справка по инвалидности' },
    { suvkDocType: 8, name: 'Пенсионное удостоверение' },
    { suvkDocType: 6, name: 'Финансовый лицевой счет' },
    { suvkDocType: 119, name: 'Карточка учета' },
    { suvkDocType: 120, name: 'ЕЖД' },
    { suvkDocType: 121, name: 'Удостоверение Ветеран труда' },
    { suvkDocType: 122, name: 'Удостоверение многодетной семьи' },
    { suvkDocType: 83, name: 'Выписка из домовой книги' },
    { suvkDocType: 5, name: 'Выписка из ЕГРН' },
    { suvkDocType: 123, name: 'Свидетельство о рождении' },
    { suvkDocType: 124, name: 'Справка, выдаваемая органами опеки и попечительства' },
    { suvkDocType: 4, name: 'Свидетельство о собственности' },
    { suvkDocType: 125, name: 'Решение о предоставлении государственной функции' },
    { suvkDocType: 142, name: 'Свидетельство о браке' },
    { suvkDocType: 143, name: 'Свидетельство о разводе' },
    { suvkDocType: 144, name: 'Свидетельство о перемене имени' },
  ],

  lgotType: '',

  documentsList: {
    invalid: {
      title: 'Инвалид',
      mainDocList: [],
      dopDocList: [],
    },
    veteran: {
      title: 'Ветеран труда',
      mainDocList: [
        {
          id: 0, name: 'Паспорт', scaned: false, disable: false, suvkDocType: 3, multipullScan: true,
        },
        {
          id: 1, name: 'СНИЛС', scaned: false, disable: true, suvkDocType: 7,
        },
        {
          id: 2, name: 'Удостоверение «Ветеран труда»', scaned: false, disable: true, suvkDocType: 121,
        },
        {
          id: 3, name: 'Пенсионное удостоверение', scaned: false, disable: true, suvkDocType: 8,
        },
      ],
      dopDocList: [
        {
          id: 0, name: 'ЕЖД', scaned: false, suvkDocType: 120,
        },
        {
          id: 1, name: 'Выписка из домой книги', scaned: false, suvkDocType: 83,
        },
        {
          id: 2, name: 'ФЛС', scaned: false, suvkDocType: 6,
        },
        {
          id: 3, name: 'Карточка учёта', scaned: false, suvkDocType: 119,
        },
      ],
    },
    sirota: {
      title: 'Сирота',
      mainDocList: [],
      dopDocList: [],
    },
  },
});
export default GlobalState;

export const updateGlobalState = (values) => {
  const updatedValues = (s) => {
    Object.keys(values).forEach((key) => {
      s[key] = values[key];
    });
  };
  GlobalState.update(updatedValues);
};

// обновление непосредственного состояния соединения
export const updateConnectionStatus = (values) => {
  const updatedValues = (s) => {
    Object.keys(values).forEach((key) => {
      s.mainApiData[key] = values[key];
    });
  };
  GlobalState.update(updatedValues);
};

// обновление кнопок сканирования
// ОСНОВНЫХ документов
export const updateMainButtonsStatus = (key, buttonIndex) => {
  const cState = GlobalState.getRawState();

  let ButtonStatus = cState.documentsList[key].mainDocList;

  const currentButton = { ...ButtonStatus[buttonIndex], scaned: true };
  const nextButton = { ...ButtonStatus[buttonIndex + 1], disable: false };

  ButtonStatus = ButtonStatus.map((el) => {
    if (el.id === currentButton.id) return el = currentButton;
    if (el.id === nextButton.id) return el = nextButton;
    return el;
  });

  GlobalState.update((s) => {
    s.documentsList[key].mainDocList = ButtonStatus;
  });
};
// ДОПОЛНИТЕЛЬНОГО документа
export const updateDopButtonsStatus = (key, buttonIndex) => {
  const cState = GlobalState.getRawState();

  let ButtonStatus = cState.documentsList[key].dopDocList;
  const currentButton = { ...ButtonStatus[buttonIndex], scaned: true };

  ButtonStatus = ButtonStatus.map((el) => {
    if (el.id === currentButton.id) return el = currentButton;
    return el;
  });

  GlobalState.update((s) => {
    s.documentsList[key].dopDocList = ButtonStatus;
  });
};
