import React, { Component, } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Root } from "native-base";

import Routes from './Routes';
import reducers from './reducers';

import Loading from './components/loading';

import * as services from './services';
import * as util from './util';

import { AsyncStorage } from 'react-native';
import axios from 'axios';

class App extends Component {

    render() {
        
        console.disableYellowBox=true
        global.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Root>
            <Provider store={global.store}>
                <Loading/>
                <Routes />
            </Provider>
            </Root>
        );
    }
}

export default App;
