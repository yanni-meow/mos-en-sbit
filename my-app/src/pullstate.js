import { Store } from "pullstate";

const GlobalState = new Store({
    lgotType: '',
    documentsList: {
        invalid: {
            title: 'Инвалид',
            doclist: [],
        },
        veteran: {
            title: 'Ветеран труда',
            doclist: [
                {id:0, name: 'Паспорт', scaned: false, disable: false}, 
                {id:1, name: 'СНИЛС', scaned: false, disable: true}, 
                {id:2, name: 'Удостоверение «Ветеран труда»', scaned: false, disable: true},
                {id:3, name: 'Пенсионное удостоверение или иной документ, подтверждающий назначение пенсии', scaned: false, disable: true},
            ], 
        },
        sirota: {
            title: 'Сирота',
            doclist: []
        },
    },
    dopDocumentsList: {
        invalidDop: {
            title: 'Инвалид',
            doclist: [],
        },
        veteranDop: {
            title: 'Ветеран труда',
            doclist: [
                {id:0, name: 'ЕЖД', scaned: false}, 
                {id:1, name: 'Выписка из домой книги', scaned: false}, 
                {id:2, name: 'Копия ФЛС', scaned: false},
                {id:3, name: 'Карточка учёта', scaned: false},
            ], 
        },
        sirotaDop: {
            title: 'Сирота',
            doclist: []
        },
    }
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

// обновление кнопок сканирования
// ОСНОВНЫХ документов
export const updateMainButtonsStatus = (key, buttonIndex) => {
    const cState = GlobalState.getRawState();
  
    let ButtonStatus = cState.documentsList[key].doclist;
  
    let currentButton = { ...ButtonStatus[buttonIndex], scaned: true };    
    let nextButton = { ...ButtonStatus[buttonIndex + 1], disable: false };
  
    ButtonStatus = ButtonStatus.map((el) => {
      if (el.id === currentButton.id) return el = currentButton;
      if (el.id === nextButton.id) return el = nextButton;
      return el;
    });
  
    GlobalState.update((s) => {
      s.documentsList[key].doclist = ButtonStatus;
    });
};
// ДОПОЛНИТЕЛЬНОГО документа
export const updateDopButtonsStatus = (key, buttonIndex) => {
    const cState = GlobalState.getRawState();
  
    let ButtonStatus = cState.dopDocumentsList[key].doclist;
    let currentButton = { ...ButtonStatus[buttonIndex], scaned: true };    
  
    ButtonStatus = ButtonStatus.map((el) => {
      if (el.id === currentButton.id) return el = currentButton;
      return el;
    });
  
    GlobalState.update((s) => {
      s.dopDocumentsList[key].doclist = ButtonStatus;
    });
};
