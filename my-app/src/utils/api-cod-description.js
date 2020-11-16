export const getError = (type) => {
  const errorCodList = {
    6000: 'Отсутствует доступ к системе',
    6002: 'Логин или пароль неверный',
    6006: 'Введенное показание счетчика не может быть меньше предыдущего',
    6007: 'Введенное показание счетчика не может быть отрицательным',
    6008: 'Введенное показание счетчика не может быть равным нулю',
    6009: 'Расход между текущим и предыдущим показанием не может превышать 1000',
    6010: 'Абонент/прибор учета не найден',
    6011: 'Услуга не найдена',
    6013: 'Биллинг не доступен. Услуга зарегистрирована',
    6015: 'Значения показаний по всем зонам суток одновременно равны 0',
    6016: 'Значность показаний превышает значность ПУ',
    6017: 'Количество введенных показаний не соответствует типу учета',
    6018: 'Аномальный расход',
    6019: 'Введенные показания счетчика не могут быть меньше предыдущих',
    6020: 'Телефон не привязан к ЛС',
    6021: 'E-mail некорректный',
    6022: 'К услуге прикреплены не все обязательные документы',
    6023: 'Переданы не все атрибуты по услуге',
    6024: 'Удаление документа невозможно, так как он прикреплен к услуге',
    6025: 'Документ был зарегистрирован другим пользователем, его удаление невозможно',
    6026: 'Переданы некорректные данные',
  };

  return errorCodList[type];
};