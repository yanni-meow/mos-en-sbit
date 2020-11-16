import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrapper from '../components/wrapper';
import Home from '../components/1.home';
import Screen12 from '../components/1.2';
import Screen13 from '../components/1.3';
import Screen2 from '../components/2.1';
import Screen31 from '../components/3.1';
import Screen41 from '../components/4.1';
import Screen51 from '../components/5.1';
import Screen61 from '../components/6.1';
import Screen91 from '../components/9.1';
import Screen92 from '../components/9.2';
import VideoCall from '../components/videocall';
import GlobalState from '../pullstate';
import Modal from '../components/modal';
import { ErrorList } from '../components/API-errors';
import ApiRoute from '../utils/api-route';

function Wrapp(Component, props) {
  return (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
}

const Routes = () => {
  const { errorCod, connectionError } = GlobalState.useState((s) => s.errorApi);

  return (
    <BrowserRouter>
      {(errorCod !== 0) && (
      <Modal>
        <ErrorList />
      </Modal>
      )}
      <Switch>
        <Route path="/home" render={(props) => Wrapp(Home, props)} />
        <Route path="/1.2" render={(props) => Wrapp(Screen12, props)} />
        <Route path="/1.3" render={(props) => Wrapp(Screen13, props)} />
        <Route path="/2.1" render={(props) => Wrapp(Screen2, props)} />
        <Route path="/3.1" render={(props) => Wrapp(Screen31, props)} />
        <Route path="/4.1" render={(props) => Wrapp(Screen41, props)} />
        <Route path="/5.1" render={(props) => Wrapp(Screen51, props)} />
        <Route path="/6.1" render={(props) => Wrapp(Screen61, props)} />
        <Route path="/9.1" render={(props) => Wrapp(Screen91, props)} />
        <Route path="/9.2" render={(props) => Wrapp(Screen92, props)} />
        <Route path="/videocall" render={(props) => Wrapp(VideoCall, props)} />
        <Route path="/api" render={(props) => Wrapp(ApiRoute, props)} />
        {/* <Route path='/' render={ (props) => Wrapp (, props) } /> */}
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
