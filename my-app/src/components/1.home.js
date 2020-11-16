import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import video from '../images/video.png';
import card from '../images/personal-card.png';
import list from '../images/list.png';
import info from '../images/info.png';
import education from '../images/education.png';
import { authentification } from '../utils/API';
import GlobalState, { updateConnectionStatus, updateGlobalState } from '../pullstate';
import { ErrorList } from './API-errors';

const Home = () => {
  const {
    isLoading, session, connectionError,
  } = GlobalState.useState((s) => s.mainApiData);

  const fetchData = async () => {
    await authentification();
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div className="homePage page">

      { isLoading && 'spinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspinerspiner'}

      { session
            && (
            <>
              {' '}
              <h1>Выберите услугу</h1>
              <Link to="/videocall" className="btnVideoCall">
                <img className="btnIcon" src={video} />
                <p className="btnText">Видеозвонок</p>
              </Link>
              <Link to="/1.2" className="btnHome">
                <img className="btnIcon" src={list} />
                <p className="btnText">Открытие, переоформление, закрытие льгот</p>
              </Link>
              <Link to="/" className="btnHome">
                <img className="btnIcon" src={card} />
                <p className="btnText">Изменение данных владельца лицевого счёта</p>
              </Link>
              <Link to="/" className="btnHome">
                <img className="btnIcon" src={info} />
                <p className="btnText">Информация</p>
              </Link>
              <Link to="/" className="btnHome">
                <img className="btnIcon" src={education} />
                <p className="btnText">Инструкция</p>
              </Link>
            </>
            ) }

      { connectionError && (
      <>
        <ErrorList fetchData={fetchData} />
        {/* <button className="btnWhole btnText" onClick={fetchData}>
          Попробовать снова
        </button> */}
      </>
      )}

    </div>
  );
};

export default Home;
