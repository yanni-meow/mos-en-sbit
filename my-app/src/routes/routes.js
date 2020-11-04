import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrapper from '../companents/wrapper';
import ConnectionError from '../companents/2.2.errors';
import Home from '../companents/1.home';
import Screen12 from '../companents/1.2';
import Screen13 from '../companents/1.3';
import Screen2 from '../companents/2.1';
import Screen31 from '../companents/3.1';
import Screen41 from '../companents/4.1';

function Wrapp (Component, props) {
    return (
        <Wrapper>
            <Component {...props} />
        </Wrapper> 
    )
}

const Routes = () => {
    return (  
        <BrowserRouter>
            <Switch>
                <Route path='/home' render={ (props) => Wrapp (Home, props) } />
                <Route path='/1.2' render={ (props) => Wrapp (Screen12, props) } />
                <Route path='/1.3' render={ (props) => Wrapp (Screen13, props) } />
                <Route path='/2.1' render={ (props) => Wrapp (Screen2, props) } />
                <Route path='/2.2' render={ (props) => Wrapp (ConnectionError, props) } />
                <Route path='/3.1' render={ (props) => Wrapp (Screen31, props) } />
                <Route path='/4.1' render={ (props) => Wrapp (Screen41, props) } />
                {/* <Route path='/' render={ (props) => Wrapp (, props) } /> */}
            </Switch>
        </BrowserRouter>
    );
}
 
export default Routes;