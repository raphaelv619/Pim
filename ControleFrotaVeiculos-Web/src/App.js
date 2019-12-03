import React, { Component, } from 'react';
import { PermissionsAndroid, Platform,View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import Routes from './Routes';
import reducers from './reducers';
import * as services from './services';
import * as util from './util';
import thunkMiddleware from 'redux-thunk';
import Loading from './components/loading';

//import firebaseClass from './util/firebase';
// import Loading from './components/loading';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {

    render() {
        global.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (

            <View style={{flex: 1}}>
                {/* <Loading/> */}
                <Provider store={global.store}>
                    <Routes />
                </Provider>
            </View>
        );
    }
}

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
