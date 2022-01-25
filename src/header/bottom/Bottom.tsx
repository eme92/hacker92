import './Bottom.scss';
import { Switch,Route, useLocation} from 'wouter';
import  Html from '../../pages/html/Html';
import  Css  from '../../pages/css/Css';
import Php from '../../pages/php/Php';
import Js from '../../pages/js/Js';


const Bottom = ()=>{

    return(
    <div className="containerBottom" id='redirection'>
        <Switch>
  <Route path="/about">...</Route>

            
            <Route path="/html">
              <Html/>
            </Route>
  
  
            <Route path="/css">
              <Css/>
            </Route>

            <Route path="/js">
              <Js/>  
            </Route>


            <Route path="/php">
              <Php/>
              </Route>

              <Route path='./'>
                  
              </Route>

</Switch>

    </div>
    )
}

export default Bottom;