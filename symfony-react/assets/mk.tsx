import './bootstrap';
import React from 'react';
import {Layout} from "antd";
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import MkNavigation from "./mk/shared/MkNavigation";

import 'antd/dist/antd.css';
import './mk/styles/mk.css';

const {Sider, Content} = Layout;

ReactDOM.render(
   <React.StrictMode>
      <HashRouter basename={''}>
         <div className={'flex'}>
            <Sider>
               <MkNavigation/>
            </Sider>
            <Content>
               <Switch>
                  <Route exact path="/">
                     <div className={'bg-red-100'}>app</div>
                  </Route>
               </Switch>
            </Content>
         </div>
      </HashRouter>
   </React.StrictMode>,
   document.getElementById('app')
);