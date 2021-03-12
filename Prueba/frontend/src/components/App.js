import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from "./layout/Header";

import Alerts from "./layout/Alerts";

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'; 

import {Provider} from 'react-redux';
import store from '../store';

import Form from './leads/Form';
import Leads from './leads/Leads';
//Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Fragment>
                    <Header />
                    <Alerts></Alerts>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Leads} />
                            <Route exact path="/leads/add" component={Form} />
                        </Switch>
                    </BrowserRouter>
                </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));