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
                {id:0, name: 'Паспорт', scaned: false, desable: false}, 
                {id:1, name: 'СНИЛС', scaned: false, desable: true}, 
                {id:2, name: 'Удостоверение «Ветеран труда»', scaned: false, desable: true},
                {id:3, name: 'Пенсионное удостоверение или иной документ, подтверждающий назначение пенсии', scaned: false, desable: true},
            ], 
        },
        sirota: {
            title: 'Сирота',
            doclist: []
        },
    },
    dopDocList: {
        invalid: {},
        veteran: {
            title: 'Ветеран труда',
            doclist: [
                {id:0, name: 'ЕЖД', scaned: false}, 
                {id:1, name: 'Выписка из домой книги', scaned: false}, 
                {id:2, name: 'Копия ФЛС', scaned: false},
                {id:3, name: 'Карточка учёта', scaned: false},
            ], 
        },
        sirota: {},
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
